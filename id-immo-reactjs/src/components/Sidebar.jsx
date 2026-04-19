import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../assets/css/sidebar.css";


// MUI-style icons using SVG
const icons = {
  Home: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Analytics: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  Shop: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  ),
  Chat: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Grid: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Minus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  ),
  Gift: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"/>
      <rect x="2" y="7" width="20" height="5"/>
      <line x1="12" y1="22" x2="12" y2="7"/>
      <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
      <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
    </svg>
  ),
  Monitor: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  ExternalLink: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  Book: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  Images: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  ),
  Settings: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
    </svg>
  ),
}

const menuItems = [
  {
    section: 'ACCUEIL',
    items: [
      { label: 'Accueil', icon: 'Home', path: '/', badge: null },
      { label: 'Mot du Président', icon: 'User', path: '/mot-president', badge: null },
      { label: 'Notre Histoire', icon: 'Book', path: '/notre-histoire', badge: null },
    ]
  },
  {
    section: 'MÉDIAS',
    items: [
      { label: 'Actualités', icon: 'Monitor', path: '/actualites', badge: null },
      { label: 'Événements', icon: 'Calendar', path: '/evenements', badge: 'Nouveau' },
      { label: 'Galerie Photos', icon: 'Images', path: '/galerie', badge: null },
    ]
  },
  {
    section: 'NOS ÉGLISES',
    items: [
      { label: 'Zones & Régions', icon: 'MapPin', path: '/zones', badge: null },
      { label: 'Annuaire', icon: 'Grid', path: '/annuaire-region', badge: null },
      {
        label: 'Ressources', icon: 'Book', path: null, badge: null,
        children: [
          { label: 'Bibliothèque', path: '/bibliotheque' },
          { label: 'Téléchargements', path: '/telechargement' },
          { label: 'Liens utiles', path: '/liens-utiles' },
        ]
      },
    ]
  },
  {
    section: 'COMMUNAUTÉ',
    items: [
      { label: 'Don & Soutien', icon: 'Heart', path: '/don', badge: '6' },
      { label: 'Bénévolat', icon: 'Gift', path: '/benevole', badge: null },
      { label: 'Contact', icon: 'Phone', path: '/contact', badge: null },
      { label: 'Espace Membre', icon: 'Settings', path: '/login', badge: 'outlined' },
    ]
  },
]

const Sidebar = ({ open, onClose, collapsed }) => {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (label) => {
    setExpandedItems(prev => ({ ...prev, [label]: !prev[label] }))
  }

  const isActive = (path) => location.pathname === path

  const renderBadge = (badge) => {
    if (!badge) return null
    if (badge === 'outlined') return <span className="sb-badge sb-badge--outlined">membre</span>
    if (/^\d+$/.test(badge)) return <span className="sb-badge sb-badge--count">{badge}</span>
    return <span className="sb-badge sb-badge--new">{badge}</span>
  }

  return (
    <>
      {/* Overlay mobile */}
      <div
        className={`sb-overlay ${open ? 'sb-overlay--visible' : ''}`}
        onClick={onClose}
      />

      <aside className={`sb-root ${open ? 'sb-root--open' : ''} ${collapsed ? 'sb-root--collapsed' : ''}`}>
        {/* Logo */}
        <div className="sb-logo">
          <div className="sb-logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#4F46E5"/>
              <path d="M20 8l10 6v12l-10 6-10-6V14z" fill="white" opacity="0.9"/>
              <path d="M20 14l6 3.5v7L20 28l-6-3.5v-7z" fill="#4F46E5"/>
            </svg>
          </div>
          {!collapsed && <span className="sb-logo-text">CBT Togo</span>}
        </div>

        {/* Nav */}
        <nav className="sb-nav">
          {menuItems.map((section) => (
            <div key={section.section} className="sb-section">
              {!collapsed && <p className="sb-section-title">{section.section}</p>}
              {section.items.map((item) => {
                const IconComp = icons[item.icon]
                const hasChildren = item.children && item.children.length > 0
                const expanded = expandedItems[item.label]
                const active = isActive(item.path)

                return (
                  <div key={item.label}>
                    {hasChildren ? (
                      <button
                        className={`sb-item ${expanded ? 'sb-item--expanded' : ''}`}
                        onClick={() => toggleExpand(item.label)}
                        title={collapsed ? item.label : undefined}
                      >
                        <span className="sb-item-icon">{IconComp && <IconComp />}</span>
                        {!collapsed && (
                          <>
                            <span className="sb-item-label">{item.label}</span>
                            <span className={`sb-item-chevron ${expanded ? 'sb-item-chevron--open' : ''}`}>
                              <icons.ChevronDown />
                            </span>
                          </>
                        )}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`sb-item ${active ? 'sb-item--active' : ''}`}
                        onClick={onClose}
                        title={collapsed ? item.label : undefined}
                      >
                        <span className="sb-item-icon">{IconComp && <IconComp />}</span>
                        {!collapsed && (
                          <>
                            <span className="sb-item-label">{item.label}</span>
                            {renderBadge(item.badge)}
                          </>
                        )}
                      </Link>
                    )}

                    {/* Submenu */}
                    {hasChildren && expanded && !collapsed && (
                      <div className="sb-submenu">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`sb-subitem ${isActive(child.path) ? 'sb-subitem--active' : ''}`}
                            onClick={onClose}
                          >
                            <span className="sb-subitem-dot" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </nav>

        {/* User profile */}
        {!collapsed && (
          <div className="sb-user">
            <div className="sb-user-avatar">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=pastor&backgroundColor=b6e3f4"
                alt="avatar"
              />
            </div>
            <div className="sb-user-info">
              <p className="sb-user-name">Pasteur Martin</p>
              <p className="sb-user-role">Administrateur</p>
            </div>
            <button className="sb-user-settings">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
              </svg>
            </button>
          </div>
        )}

        {/* Collapsed user avatar only */}
        {collapsed && (
          <div className="sb-user sb-user--collapsed">
            <div className="sb-user-avatar">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=pastor&backgroundColor=b6e3f4"
                alt="avatar"
              />
            </div>
          </div>
        )}
      </aside>
    </>
  )
}

export default Sidebar