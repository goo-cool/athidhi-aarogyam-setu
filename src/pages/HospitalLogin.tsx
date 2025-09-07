import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ArrowLeft, Building2, Shield, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import swasthyamLogo from '@/assets/swasthyam-logo.png';

export default function HospitalLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalId: '',
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (formData.hospitalId && formData.username && formData.password) {
      setIsLoading(true);
      setTimeout(() => {
        navigate('/hospital-dashboard');
      }, 2000);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-backwater">
      {/* Header */}
      <header className="bg-gradient-trust text-trust-navy-foreground shadow-medical">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <EnhancedButton variant="ghost" onClick={handleBack} className="gap-2 text-trust-navy-foreground hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                Back
              </EnhancedButton>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-medical-white rounded-lg flex items-center justify-center p-1">
                  <img src={swasthyamLogo} alt="Swasthyam Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">Hospital Portal</h1>
                  <p className="text-sm opacity-90">Healthcare Provider Access</p>
                </div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-medical">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Building2 className="h-6 w-6 text-primary" />
                Hospital Login
              </CardTitle>
              <CardDescription>
                Access hospital dashboard for health record management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="hospitalId">Hospital ID</Label>
                <Input
                  id="hospitalId"
                  type="text"
                  placeholder="Enter Hospital ID (e.g., KL-HOSP-001)"
                  value={formData.hospitalId}
                  onChange={(e) => setFormData({ ...formData, hospitalId: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <EnhancedButton 
                variant="trust" 
                className="w-full gap-2"
                onClick={handleLogin}
                disabled={!formData.hospitalId || !formData.username || !formData.password || isLoading}
              >
                <Shield className="h-4 w-4" />
                {isLoading ? 'Authenticating...' : 'Login to Dashboard'}
              </EnhancedButton>

              <Alert className="bg-medical-accent/10 border-medical-accent/30">
                <AlertCircle className="h-4 w-4 text-medical-accent" />
                <AlertDescription className="text-medical-accent text-xs">
                  Hospital credentials are provided by Kerala Health Department. Contact IT support for login issues.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}