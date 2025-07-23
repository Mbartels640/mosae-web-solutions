import React from 'react';

interface ServiceIconProps {
    className?: string;
}

export const WebDevelopmentIcon: React.FC<ServiceIconProps> = ({ className = "w-full h-full max-w-80 max-h-60" }) => (
    <svg viewBox="0 0 400 300" className={className}>
        {/* Browser Window */}
        <rect
            x="50"
            y="60"
            width="300"
            height="200"
            rx="8"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="2"
        />
        <rect x="50" y="60" width="300" height="40" rx="8" fill="#334155" />
        <circle cx="70" cy="80" r="6" fill="#ef4444" />
        <circle cx="90" cy="80" r="6" fill="#f59e0b" />
        <circle cx="110" cy="80" r="6" fill="#10b981" />
        {/* Code Elements */}
        <rect x="70" y="120" width="80" height="8" rx="4" fill="#6366f1" />
        <rect x="70" y="140" width="120" height="8" rx="4" fill="#8b5cf6" />
        <rect x="70" y="160" width="60" height="8" rx="4" fill="#06b6d4" />
        {/* Gear Icon */}
        <g transform="translate(280, 180)">
            <circle cx="0" cy="0" r="25" fill="#f59e0b" />
            <circle cx="0" cy="0" r="12" fill="#fff" />
            <rect x="-3" y="-30" width="6" height="10" rx="3" fill="#f59e0b" />
            <rect x="-3" y="20" width="6" height="10" rx="3" fill="#f59e0b" />
            <rect x="20" y="-3" width="10" height="6" rx="3" fill="#f59e0b" />
            <rect x="-30" y="-3" width="10" height="6" rx="3" fill="#f59e0b" />
        </g>
        {/* Developer Figure */}
        <g transform="translate(320, 140)">
            <circle cx="0" cy="-20" r="12" fill="#fbbf24" />
            <rect x="-8" y="-10" width="16" height="25" rx="8" fill="#3b82f6" />
            <rect x="-6" y="15" width="5" height="15" fill="#1e40af" />
            <rect x="1" y="15" width="5" height="15" fill="#1e40af" />
        </g>
    </svg>
);

export const SEOIcon: React.FC<ServiceIconProps> = ({ className = "w-full h-full max-w-80 max-h-60" }) => (
    <svg viewBox="0 0 400 300" className={className}>
        {/* Search Bar */}
        <rect
            x="50"
            y="80"
            width="250"
            height="40"
            rx="20"
            fill="#fff"
            stroke="#e2e8f0"
            strokeWidth="2"
        />
        <circle cx="280" cy="100" r="15" fill="#10b981" />
        <path d="m285 105 5 5" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        {/* Search Results */}
        <rect x="70" y="140" width="200" height="12" rx="6" fill="#3b82f6" />
        <rect x="70" y="160" width="150" height="8" rx="4" fill="#6b7280" />
        <rect x="70" y="175" width="180" height="8" rx="4" fill="#6b7280" />
        <rect x="70" y="200" width="180" height="12" rx="6" fill="#3b82f6" />
        <rect x="70" y="220" width="160" height="8" rx="4" fill="#6b7280" />
        <rect x="70" y="235" width="140" height="8" rx="4" fill="#6b7280" />
        {/* Analytics Chart */}
        <g transform="translate(300, 160)">
            <rect x="0" y="40" width="8" height="20" fill="#10b981" />
            <rect x="12" y="30" width="8" height="30" fill="#10b981" />
            <rect x="24" y="20" width="8" height="40" fill="#10b981" />
            <rect x="36" y="10" width="8" height="50" fill="#10b981" />
            <rect x="48" y="5" width="8" height="55" fill="#10b981" />
        </g>
        {/* Magnifying Glass */}
        <g transform="translate(320, 100)">
            <circle cx="0" cy="0" r="20" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="m15 15 10 10" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
        </g>
    </svg>
);

export const MaintenanceIcon: React.FC<ServiceIconProps> = ({ className = "w-full h-full max-w-80 max-h-60" }) => (
    <svg viewBox="0 0 400 300" className={className}>
        {/* Shield */}
        <path d="M200 50 L160 70 L160 150 Q160 180 200 200 Q240 180 240 150 L240 70 Z" fill="#8b5cf6" />
        <path d="M200 70 L175 85 L175 145 Q175 165 200 180 Q225 165 225 145 L225 85 Z" fill="#a78bfa" />
        {/* Checkmark */}
        <path
            d="m185 125 10 10 20-20"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        {/* Tools */}
        <g transform="translate(120, 180)">
            <rect x="0" y="0" width="40" height="8" rx="4" fill="#f59e0b" transform="rotate(45)" />
            <rect x="15" y="-15" width="8" height="40" rx="4" fill="#f59e0b" transform="rotate(45)" />
        </g>
        <g transform="translate(280, 180)">
            <circle cx="0" cy="0" r="20" fill="none" stroke="#10b981" strokeWidth="4" />
            <rect x="-15" y="-3" width="30" height="6" rx="3" fill="#10b981" />
            <rect x="-3" y="-15" width="6" height="30" rx="3" fill="#10b981" />
        </g>
        {/* Gears */}
        <g transform="translate(100, 120)">
            <circle cx="0" cy="0" r="15" fill="#06b6d4" />
            <circle cx="0" cy="0" r="8" fill="#fff" />
            <rect x="-2" y="-18" width="4" height="6" rx="2" fill="#06b6d4" />
            <rect x="-2" y="12" width="4" height="6" rx="2" fill="#06b6d4" />
            <rect x="12" y="-2" width="6" height="4" rx="2" fill="#06b6d4" />
            <rect x="-18" y="-2" width="6" height="4" rx="2" fill="#06b6d4" />
        </g>
        <g transform="translate(300, 120)">
            <circle cx="0" cy="0" r="12" fill="#f59e0b" />
            <circle cx="0" cy="0" r="6" fill="#fff" />
            <rect x="-1.5" y="-15" width="3" height="5" rx="1.5" fill="#f59e0b" />
            <rect x="-1.5" y="10" width="3" height="5" rx="1.5" fill="#f59e0b" />
            <rect x="10" y="-1.5" width="5" height="3" rx="1.5" fill="#f59e0b" />
            <rect x="-15" y="-1.5" width="5" height="3" rx="1.5" fill="#f59e0b" />
        </g>
    </svg>
);

// Export an array of icons for easy mapping
export const serviceIcons = [
    WebDevelopmentIcon,
    SEOIcon,
    MaintenanceIcon,
] as const;

// Export a mapping object if you prefer named access
export const serviceIconMap = {
    webDevelopment: WebDevelopmentIcon,
    seo: SEOIcon,
    maintenance: MaintenanceIcon,
} as const;