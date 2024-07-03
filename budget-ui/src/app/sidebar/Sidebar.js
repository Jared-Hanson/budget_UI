'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './sidebar.css';

const Sidebar = () => {
    const pathname = usePathname();
    // Update accounts to link to the account selected here. Will need to map all the accounts
    const links = [
        { href: '/accounts/all', label: 'All Accounts' },
        { href: '/accounts/123', label: 'Specific Accounts' },
        { href: '/reports', label: 'Reports' },
        { href: '/profile', label: 'Profiles' },
        { href: '/budget', label: 'Budget' },
    ];

    return (
        <div className="sidebar">
            <ul>
                {links.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className={pathname === link.href ? 'selected' : ''}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;