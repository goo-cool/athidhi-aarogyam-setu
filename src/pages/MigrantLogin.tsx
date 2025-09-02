import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { CreditCard, Fingerprint, FileText, ArrowLeft, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MigrantLogin() {
  const [selectedMethod, setSelectedMethod] = useState('aadhaar');
  const [credentials, setCredentials] = useState({
    aadhaar: '',
    uhid: '',
    otp: ''
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login success
    navigate('/migrant-profile');
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
            <div className="mx-auto w-16 h-16 bg-gradient-kerala rounded-full flex items-center justify-center mb-4">
              <Fingerprint className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Migrant Worker Login</CardTitle>
            <CardDescription>
              Access your health records securely using your preferred method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedMethod} onValueChange={setSelectedMethod}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="aadhaar" className="text-xs">
                  <CreditCard className="h-3 w-3 mr-1" />
                  Aadhaar
                </TabsTrigger>
                <TabsTrigger value="digilocker" className="text-xs">
                  <FileText className="h-3 w-3 mr-1" />
                  DigiLocker
                </TabsTrigger>
                <TabsTrigger value="uhid" className="text-xs">
                  <Fingerprint className="h-3 w-3 mr-1" />
                  UHID
                </TabsTrigger>
              </TabsList>

              <TabsContent value="aadhaar" className="space-y-4 mt-6">
                <div>
                  <Label htmlFor="aadhaar">Aadhaar Number</Label>
                  <Input
                    id="aadhaar"
                    placeholder="Enter 12-digit Aadhaar number"
                    value={credentials.aadhaar}
                    onChange={(e) => setCredentials({...credentials, aadhaar: e.target.value})}
                    maxLength={12}
                  />
                </div>
                <div>
                  <Label htmlFor="aadhaar-otp">OTP</Label>
                  <Input
                    id="aadhaar-otp"
                    placeholder="Enter OTP sent to registered mobile"
                    value={credentials.otp}
                    onChange={(e) => setCredentials({...credentials, otp: e.target.value})}
                    maxLength={6}
                  />
                </div>
                <EnhancedButton variant="kerala" className="w-full gap-2" onClick={handleLogin}>
                  <LogIn className="h-4 w-4" />
                  Login with Aadhaar
                </EnhancedButton>
              </TabsContent>

              <TabsContent value="digilocker" className="space-y-4 mt-6">
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Login securely using your DigiLocker credentials
                  </p>
                  <EnhancedButton variant="trust" className="w-full gap-2" onClick={handleLogin}>
                    <FileText className="h-4 w-4" />
                    Connect with DigiLocker
                  </EnhancedButton>
                </div>
              </TabsContent>

              <TabsContent value="uhid" className="space-y-4 mt-6">
                <div>
                  <Label htmlFor="uhid">Universal Health ID (UHID)</Label>
                  <Input
                    id="uhid"
                    placeholder="Enter your UHID"
                    value={credentials.uhid}
                    onChange={(e) => setCredentials({...credentials, uhid: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="uhid-otp">OTP</Label>
                  <Input
                    id="uhid-otp"
                    placeholder="Enter OTP sent to registered mobile"
                    value={credentials.otp}
                    onChange={(e) => setCredentials({...credentials, otp: e.target.value})}
                    maxLength={6}
                  />
                </div>
                <EnhancedButton variant="health" className="w-full gap-2" onClick={handleLogin}>
                  <Fingerprint className="h-4 w-4" />
                  Login with UHID
                </EnhancedButton>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <span className="text-primary font-medium cursor-pointer hover:underline">
                  Register here
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Secure authentication powered by</p>
          <p className="font-medium">Government of India Digital Identity</p>
        </div>
      </div>
    </div>
  );
}