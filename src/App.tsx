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
      if (containerWidth < 720) {
        setScale(containerWidth / 720);
      } else {
        setScale(1);
      }
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
              <h2 className="card-title__en">FACE</h2>
              <h2 className="card-title__zh">輪廓光影</h2>
            </div>

            <div className="card-overlay">
              <h2 className="card-overlay__en">CE</h2>
              <h2 className="card-overlay__zh">光影</h2>
            </div>

            <ul className="card-treatments">
              <li>逆時線雕拉提</li>
              <li>膠原賦活再生</li>
              <li>深層營養水光</li>
              <li>輪廓光影微雕</li>
              <li>動態撫紋精緻V臉</li>
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
              <h2 className="card-title__en">SKIN</h2>
              <h2 className="card-title__zh">原生微光</h2>
            </div>

            <div className="card-overlay">
              <h2 className="card-overlay__en">SK</h2>
              <h2 className="card-overlay__zh">原生</h2>
            </div>

            <ul className="card-treatments">
              <li>PICO S 蜂巢皮秒激光</li>
              <li>HIFU 逆齡緊緻療程</li>
              <li>膠原電眼槍</li>
              <li>零毛孔嫩肌槍</li>
              <li>5D Actual Lift 橡筋線</li>
              <li>Aqua Peel毛孔吸塵機</li>
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
              <h2 className="card-title__en">BODY</h2>
              <h2 className="card-title__zh">線條塑型</h2>
            </div>

            <div className="card-overlay">
              <h2 className="card-overlay__en">DY</h2>
              <h2 className="card-overlay__zh">塑型</h2>
            </div>

            <ul className="card-treatments">
              <li>西班牙醫學級冷凍溶脂</li>
              <li>Venus Freeze 磁力脈衝緊膚塑形療程</li>
              <li>BioCell 變頻負壓修身溶脂</li>
              <li>養護美胸療程</li>
            </ul>
          </div>
        </CardWrapper>
      </section>
    </main>
  );
}
