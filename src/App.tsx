/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import faceImg from './assets/images/face.png';
import skinImg from './assets/images/skin.png';
import bodyImg from './assets/images/body.png';

interface CardWrapperProps {
  children: React.ReactNode;
  height: number;
}

function CardWrapper({ children, height }: CardWrapperProps) {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const targetWidth = Math.min(containerWidth, 1920);
      setScale(targetWidth / 720);
    };

    // Initial calculation
    handleResize();

    // Use ResizeObserver for perfect, latency-free container resize tracking
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="card-wrapper"
      style={{
        width: '100%',
        height: `${height * scale}px`,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '720px',
          height: `${height}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          flexShrink: 0,
          position: 'absolute',
          top: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="page">
      {/* ═══ Section 1: FACE ═══ */}
      <section className="section">
        <CardWrapper height={360}>
          <div className="card card--face" tabIndex={0} role="region" aria-label="輪廓光影">
            <img
              className="card-img card-img--left"
              src={faceImg}
              alt="輪廓光影"
              width="489"
              height="489"
              referrerPolicy="no-referrer"
            />

            <div className="card-title">
              <h2 className="card-title__en">
              FA<span>C</span><span>E</span>
              </h2>
              <h2 className="card-title__zh">輪廓<span>光</span><span>影</span></h2>
            </div>

            <div className="card-overlay">
              <h2 className="card-overlay__en">CE</h2>
              <h2 className="card-overlay__zh">光影</h2>
            </div>

            <ul className="card-treatments">
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/picos蜂巢皮秒激光" target="_top">
                  PICO S 蜂巢皮秒激光
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/副本-hifu-智能緊膚360-全面拉提" target="_top">
                  膠原電眼槍
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/零毛孔嫩肌槍" target="_top">
                  零毛孔嫩肌槍
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/5dactuallift橡筋線" target="_top">
                  5D Actual Lift橡筋線
                </a>
              </li>
            </ul>
          </div>
        </CardWrapper>
      </section>

      {/* ═══ Section 2: SKIN ═══ */}
      <section className="section">
        <CardWrapper height={362}>
          <div className="card card--skin" tabIndex={0} role="region" aria-label="原生微光">
            <img
              className="card-img card-img--right"
              src={skinImg}
              alt="原生微光"
              width="489"
              height="492"
              referrerPolicy="no-referrer"
            />

            <div className="card-title">
              <h2 className="card-title__en"><span>S</span><span>K</span>IN</h2>
              <h2 className="card-title__zh"><span>原</span><span>生</span>微光</h2>
            </div>

            <div className="card-overlay">
              <h2 className="card-overlay__en">SK</h2>
              <h2 className="card-overlay__zh">原生</h2>
            </div>

            <ul className="card-treatments">
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/極肽肌源修復療程" target="_top">
                  極肽肌源修復療程
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/韓系雙星裸光肌療程" target="_top">
                  韓系雙星裸光肌療程
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/黑鑽再生波liftup筋膜肌" target="_top">
                  黑鑽再生波Lift Up筋膜肌
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/venusviva醫學級撫平肌膚療程" target="_top">
                  Venus Viva 醫學級撫平肌膚療程
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/醫學激光脫疣" target="_top">
                  醫學脫疣
                </a>
              </li>
            </ul>
          </div>
        </CardWrapper>
      </section>

      {/* ═══ Section 3: BODY ═══ */}
      <section className="section">
        <CardWrapper height={360}>
          <div className="card card--body" tabIndex={0} role="region" aria-label="線條塑型">
            <img
              className="card-img card-img--left"
              src={bodyImg}
              alt="線條塑型"
              width="489"
              height="489"
              referrerPolicy="no-referrer"
            />

            <div className="card-title">
              <h2 className="card-title__en">BO<span>D</span><span>Y</span></h2>
              <h2 className="card-title__zh">線條<span>塑</span><span>型</span></h2>
            </div>

            <div className="card-overlay">
              <h2 className="card-overlay__en">DY</h2>
              <h2 className="card-overlay__zh">塑型</h2>
            </div>

            <ul className="card-treatments">
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/副本-aqua-peel-毛孔吸塵機" target="_top">
                  Lanluis 英國皇室女性內分泌系統調理
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/k-wave標靶微波溶脂" target="_top">
                  K-Wave 標靶微波溶脂
                </a>
              </li>
              <li>
                <a href="https://skinmax001.wixsite.com/skinmax/養護美胸療程" target="_top">
                  丘比特神話胸療程
                </a>
              </li>
            </ul>
          </div>
        </CardWrapper>
      </section>
    </main>
  );
}
