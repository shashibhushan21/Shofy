import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// internal
import logo_white from '@assets/img/logo/logo-white.svg';
import logo_dark from '@assets/img/logo/logo.svg';
import { CartTwo, Menu, Search, Wishlist } from '@/svg';
import Menus from './header-com/menus';
import useSticky from '@/hooks/use-sticky';
import SearchBar from './header-com/search-bar';
import OffCanvas from '@/components/common/off-canvas';
import CartMiniSidebar from '@/components/common/cart-mini-sidebar';
import useCartInfo from '@/hooks/use-cart-info';
import { openCartMini } from '@/redux/features/cartSlice';

const HeaderThree = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isComingSoonMode, setIsComingSoonMode] = useState(true);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  const [logoSrcLight, setLogoSrcLight] = useState(logo_white);
  const [logoSrcDark, setLogoSrcDark] = useState(logo_dark);
  const [accentColor, setAccentColor] = useState('#FFA500'); // orange default

  // Check if admin preview mode is active
  React.useEffect(() => {
    const storedPreview = sessionStorage.getItem('adminPreview') === 'true';
    setIsComingSoonMode(!storedPreview);
    // allow '#FFCC00' (yellow) or '#FFA500' (orange)
    const preferred = sessionStorage.getItem('accentColor');
    if (preferred === '#FFCC00' || preferred === '#FFA500') {
      setAccentColor(preferred);
    }
  }, []);

  return (
    <>
      <header>      {menu_data && menu_data.map((menu, i) => (
        <ul key={i}>
          <li>
            <Link href={menu.link}>
              {menu.title}
            </Link>
          </li>
        </ul>
      ))}      <nav className="tp-main-menu-content">
        {menu_data && menu_data.map((menu, i) => (
          <ul key={i}>
            <li>
              <Link href={menu.link}>
                {menu.title}
              </Link>
            </li>
          </ul>
        ))}
      </nav>      <nav className="tp-main-menu-content">
        {menu_data && menu_data.map((menu, i) => (
          <ul key={i}>
            <li>
              <Link href={menu.link}>
                {menu.title}
              </Link>
            </li>
          </ul>
        ))}
      </nav>      import menu_data from '@/data/menu-data';      import { mobile_menu } from '@/data/menu-data';      import { mobile_menu } from '@/data/menu-data';      import { mobile_menu } from '@/data/menu-data';
      
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-style-transparent-white tp-header-transparent tp-header-sticky has-dark-logo tp-header-height ${sticky ? 'header-sticky' : ''} ${isComingSoonMode ? 'coming-soon' : ''}`}
          style={{
            '--accent-color': isComingSoonMode ? accentColor : 'inherit',
            borderBottom: isComingSoonMode ? `1px solid ${accentColor}55` : undefined,
            boxShadow: isComingSoonMode ? `0 2px 12px ${accentColor}22` : undefined
          }}
        >
          <div className="tp-header-bottom-3 pl-35 pr-35">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo">
                    <Link href="/" aria-label="Back to Home">
                      {/* Use explicit sizes for better layout and prevent broken image icon */}
                      <Image
                        className="logo-light"
                        src={logoSrcLight}
                        alt="Shofy — Luxury Jewelry"
                        width={140}
                        height={40}
                        priority
                        sizes="(max-width: 768px) 120px, 140px"
                        onError={() => setLogoSrcLight(logo_dark)}
                      />
                      <Image
                        className="logo-dark"
                        src={logoSrcDark}
                        alt="Shofy — Luxury Jewelry"
                        width={140}
                        height={40}
                        priority
                        sizes="(max-width: 768px) 120px, 140px"
                        onError={() => setLogoSrcDark(logo_white)}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                  <div
                    className="main-menu menu-style-3 p-relative d-flex align-items-center justify-content-center"
                    style={
                      isComingSoonMode
                        ? { color: 'var(--accent-color)', textShadow: '0 0 6px rgba(0,0,0,0.6)' }
                        : undefined
                    }
                  >
                    <nav className="tp-main-menu-content">
                      {/* ...existing code... */}
                      <Menus isComingSoonMode={isComingSoonMode} />
                      {/* ...existing code... */}
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-6">
                  <div
                    className="tp-header-action d-flex align-items-center justify-content-end ml-50"
                    style={
                      isComingSoonMode
                        ? { color: 'var(--accent-color)', textShadow: '0 0 6px rgba(0,0,0,0.6)' }
                        : undefined
                    }
                  >
                    {/* ...existing code... */}
                    <div className="tp-header-action-item d-none d-sm-block">
                      <button onClick={() => setIsSearchOpen(true)} type="button" className="tp-header-action-btn tp-search-open-btn" aria-label="Search">
                        <Search />
                      </button>
                    </div>
                    <div className="tp-header-action-item d-none d-sm-block">
                      <Link href="/wishlist" className="tp-header-action-btn" aria-label="Wishlist">
                        <Wishlist />
                        <span
                          className="tp-header-action-badge"
                          style={
                            isComingSoonMode
                              ? { backgroundColor: 'var(--accent-color)', color: '#0a0f1a', boxShadow: '0 0 6px rgba(0,0,0,0.4)' }
                              : undefined
                          }
                        >
                          {wishlist.length}
                        </span>
                      </Link>
                    </div>
                    <div className="tp-header-action-item d-none d-sm-block">
                      <button onClick={() => dispatch(openCartMini())} type="button" className="tp-header-action-btn cartmini-open-btn" aria-label="Open Cart">
                        <CartTwo />
                        <span
                          className="tp-header-action-badge"
                          style={
                            isComingSoonMode
                              ? { backgroundColor: 'var(--accent-color)', color: '#0a0f1a', boxShadow: '0 0 6px rgba(0,0,0,0.4)' }
                              : undefined
                          }
                        >
                          {quantity}
                        </span>
                      </button>
                    </div>
                    <div className="tp-header-action-item d-lg-none">
                      <button onClick={() => setIsCanvasOpen(true)} type="button" className="tp-header-action-btn tp-offcanvas-open-btn" aria-label="Open Menu">
                        <Menu />
                      </button>
                    </div>
                    {/* ...existing code... */}
                  </div>
                </div>
              </div>
              {/* Decorative slim banner only in coming-soon mode.
                  Place your image in public/coming-soon/banner.jpg */}
              {isComingSoonMode && (
                <div className="row">
                  <div className="col-12">
                    <div
                      style={{
                        marginTop: 8,
                        height: 42,
                        borderRadius: 8,
                        overflow: 'hidden',
                        background: `linear-gradient(90deg, ${accentColor}2E, ${accentColor}2E)`
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: 12, padding: '0 16px' }}>
                        <Image
                          src="/coming-soon/banner.jpg"
                          alt="Coming Soon"
                          width={64}
                          height={32}
                          sizes="64px"
                          style={{ objectFit: 'cover', borderRadius: 6 }}
                        />
                        <span style={{ color: 'var(--accent-color)', fontWeight: 600, textShadow: '0 0 6px rgba(0,0,0,0.6)' }}>
                          New collection is coming soon — stay tuned!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* search bar start */}
      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      {/* search bar end */}

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="beauty" />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;
