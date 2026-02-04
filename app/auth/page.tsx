'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/components/auth/auth-provider';
import { PageShell } from '@/components/page-shell';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const signInSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(128, 'Password must be under 128 characters.'),
});

type SignInValues = z.infer<typeof signInSchema>;

export default function AuthPage() {
  const { status, session, login, logout, error } = useAuth();
  const router = useRouter();
  const isLoading = status === 'loading';

  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const sessionDetails = useMemo(
    () =>
      session
        ? `${session.user.name} (${session.user.role}) • ${session.user.email}`
        : 'No active session',
    [session]
  );

  const onSubmit = async (values: SignInValues) => {
    try {
      await login(values.email, values.password);
      router.push('/dashboard');
    } catch {
      // handled in auth provider
    }
  };

  return (
    <PageShell
      title="Sign in"
      description="Securely access your Triscend workspace."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,_1fr)_320px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold text-gray-900">
              Sign in to continue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="you@company.com"
                          autoComplete="email"
                        />
                      </FormControl>
                      <FormDescription>
                        Use your work email to access the platform.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                        />
                      </FormControl>
                      <FormDescription>
                        Never share your password. Use 8+ characters.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {error ? (
                  <Alert variant="destructive">
                    <AlertTitle>Unable to sign in</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                ) : null}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in…' : 'Sign in'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900">
                Session status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <p>{sessionDetails}</p>
              <div className="rounded-md bg-gray-50 p-3 text-xs text-gray-500">
                Tokens are stored in session storage to avoid long-lived browser
                persistence.
              </div>
              {session ? (
                <Button variant="outline" onClick={logout}>
                  Log out
                </Button>
              ) : null}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900">
                Need help?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Visit <Link className="font-medium text-blue-600" href="/help-support">Help &amp; Support</Link> for password resets.
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
