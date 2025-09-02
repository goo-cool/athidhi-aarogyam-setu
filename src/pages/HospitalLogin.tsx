import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Building2, ArrowLeft, LogIn, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HospitalLogin() {
  const [credentials, setCredentials] = useState({
    hospitalId: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/hospital-dashboard');
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
            <div className="mx-auto w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Hospital Login</CardTitle>
            <CardDescription>
              Access hospital dashboard for health record management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hospitalId">Hospital ID</Label>
              <Input
                id="hospitalId"
                placeholder="Enter hospital registration ID"
                value={credentials.hospitalId}
                onChange={(e) => setCredentials({...credentials, hospitalId: e.target.value})}
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

            <EnhancedButton variant="trust" className="w-full gap-2" onClick={handleLogin}>
              <LogIn className="h-4 w-4" />
              Login to Dashboard
            </EnhancedButton>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Need access?{' '}
                <span className="text-primary font-medium cursor-pointer hover:underline">
                  Contact Health Department
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-4 w-4" />
            <span>Secure Health Portal</span>
          </div>
          <p>Kerala Health & Labour Department</p>
        </div>
      </div>
    </div>
  );
}