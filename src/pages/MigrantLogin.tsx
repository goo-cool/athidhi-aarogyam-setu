import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  ArrowLeft, 
  Shield, 
  Smartphone, 
  CreditCard, 
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import swasthyamLogo from '@/assets/swasthyam-logo.png';

export default function MigrantLogin() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('aadhaar');
  const [formData, setFormData] = useState({
    aadhaarNumber: '',
    phoneNumber: '',
    otp: '',
    uhid: ''
  });
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  const handleSendOTP = () => {
    if (formData.aadhaarNumber && formData.phoneNumber) {
      setIsLoading(true);
      setTimeout(() => {
        setOtpSent(true);
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/migrant-profile');
    }, 2000);
  };

  const handleRegister = () => {
    alert('DigiLocker registration integration would be implemented here');
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
                  <h1 className="text-lg font-bold">Sahayam - Worker Portal</h1>
                  <p className="text-sm opacity-90">Migrant Profile Access</p>
                </div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-kerala">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-primary" />
                Worker Login
              </CardTitle>
              <CardDescription>
                Access your health records securely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={loginMethod} onValueChange={setLoginMethod} className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="aadhaar">Aadhaar Login</TabsTrigger>
                  <TabsTrigger value="uhid">UHID Login</TabsTrigger>
                </TabsList>

                <TabsContent value="aadhaar" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="aadhaar">Aadhaar Number</Label>
                      <Input
                        id="aadhaar"
                        placeholder="Enter 12-digit Aadhaar number"
                        maxLength={12}
                        value={formData.aadhaarNumber}
                        onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter registered mobile number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      />
                    </div>

                    {!otpSent ? (
                      <EnhancedButton 
                        variant="kerala" 
                        className="w-full gap-2"
                        onClick={handleSendOTP}
                        disabled={!formData.aadhaarNumber || !formData.phoneNumber || isLoading}
                      >
                        <Smartphone className="h-4 w-4" />
                        {isLoading ? 'Sending OTP...' : 'Send OTP'}
                      </EnhancedButton>
                    ) : (
                      <div className="space-y-4">
                        <Alert className="bg-health-good/10 border-health-good/30">
                          <CheckCircle className="h-4 w-4 text-health-good" />
                          <AlertDescription className="text-health-good">
                            OTP sent to your registered mobile number
                          </AlertDescription>
                        </Alert>
                        
                        <div>
                          <Label htmlFor="otp">Enter OTP</Label>
                          <Input
                            id="otp"
                            placeholder="Enter 6-digit OTP"
                            maxLength={6}
                            value={formData.otp}
                            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                          />
                        </div>

                        <EnhancedButton 
                          variant="kerala" 
                          className="w-full"
                          onClick={handleLogin}
                          disabled={!formData.otp || isLoading}
                        >
                          {isLoading ? 'Verifying...' : 'Verify & Login'}
                        </EnhancedButton>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="uhid" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="uhid">UHID Number</Label>
                      <Input
                        id="uhid"
                        placeholder="Enter your UHID"
                        value={formData.uhid}
                        onChange={(e) => setFormData({ ...formData, uhid: e.target.value })}
                      />
                    </div>

                    <EnhancedButton 
                      variant="trust" 
                      className="w-full gap-2"
                      onClick={handleLogin}
                      disabled={!formData.uhid || isLoading}
                    >
                      <CreditCard className="h-4 w-4" />
                      {isLoading ? 'Verifying...' : 'Login with UHID'}
                    </EnhancedButton>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  New user? Register with DigiLocker
                </p>
                <EnhancedButton 
                  variant="medical" 
                  className="w-full gap-2"
                  onClick={handleRegister}
                >
                  <FileText className="h-4 w-4" />
                  Register via DigiLocker
                </EnhancedButton>
              </div>

              <Alert className="mt-4 bg-medical-accent/10 border-medical-accent/30">
                <AlertCircle className="h-4 w-4 text-medical-accent" />
                <AlertDescription className="text-medical-accent text-xs">
                  Your data is encrypted and secure. We comply with Aadhaar and DigiLocker privacy guidelines.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}