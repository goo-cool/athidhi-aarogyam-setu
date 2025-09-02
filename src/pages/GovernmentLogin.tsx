import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Shield, ArrowLeft, LogIn, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GovernmentLogin() {
  const [credentials, setCredentials] = useState({
    employeeId: '',
    username: '',
    password: '',
    otp: ''
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/government-dashboard');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-backwater p-4">
      <div className="container mx-auto max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <EnhancedButton variant="ghost" onClick={handleBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </EnhancedButton>
          <LanguageSwitcher />
        </div>

        {/* Login Card */}
        <Card className="shadow-medical">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Government Portal</CardTitle>
            <CardDescription>
              Secure access for government officials and administrators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                placeholder="Enter government employee ID"
                value={credentials.employeeId}
                onChange={(e) => setCredentials({...credentials, employeeId: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="otp">Two-Factor Authentication</Label>
              <Input
                id="otp"
                placeholder="Enter OTP from authenticator app"
                value={credentials.otp}
                onChange={(e) => setCredentials({...credentials, otp: e.target.value})}
                maxLength={6}
              />
            </div>

            <EnhancedButton variant="health" className="w-full gap-2" onClick={handleLogin}>
              <LogIn className="h-4 w-4" />
              Access Dashboard
            </EnhancedButton>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Technical support:{' '}
                <span className="text-primary font-medium cursor-pointer hover:underline">
                  it-support@kerala.gov.in
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lock className="h-4 w-4" />
            <span>High Security Government Portal</span>
          </div>
          <p>Government of Kerala - Digital Services</p>
        </div>
      </div>
    </div>
  );
}