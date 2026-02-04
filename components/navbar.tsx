'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Calendar, Bell, ChevronDown, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Performance', href: '/performance' },
  { name: 'Reports', href: '/reports' },
  { name: 'Manage', href: '/manage' },
  { name: 'Help & Support', href: '/help-support' },
];

export function Navbar() {
  const pathname = usePathname();
  const notificationCount = 3;

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-yellow-400 to-yellow-500">
              <Star className="h-5 w-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-xl font-bold tracking-tight text-gray-900">
                  TRISCEND
                </span>
                <span className="ml-0.5 text-[10px] font-semibold text-gray-600">
                  NP
                </span>
              </div>
              <span className="text-[10px] leading-none text-gray-500">
                The Power of a New Perspective
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-gray-600 hover:text-gray-900"
          >
            <Search className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-gray-600 hover:text-gray-900"
          >
            <Calendar className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9 text-gray-600 hover:text-gray-900"
          >
            <Bell className="h-4 w-4" />
            {notificationCount > 0 && (
              <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-[10px] font-semibold text-white">
                {notificationCount}
              </Badge>
            )}
          </Button>

          <div className="mx-2 h-8 w-px bg-gray-200" />

          <div className="flex items-center gap-3">
            <Link href="/profile" className="flex items-center gap-3 transition-opacity hover:opacity-75">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="John Anderson"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-sm font-semibold text-white">
                  JA
                </AvatarFallback>
              </Avatar>

              <div className="hidden flex-col sm:flex">
                <span className="text-sm font-semibold leading-tight text-gray-900">
                  John Anderson
                </span>
                <span className="text-xs leading-tight text-gray-500">
                  Your Account Manager
                </span>
              </div>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-600 hover:text-gray-900"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
