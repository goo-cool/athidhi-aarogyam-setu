import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  BarChart3, 
  Users, 
  Activity, 
  TrendingUp, 
  Download, 
  ArrowLeft,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Heart,
  FileText,
  Calendar,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data for government dashboard
const stateStats = {
  totalMigrants: 45678,
  healthScreened: 42341,
  emergencyCases: 127,
  hospitalsCovered: 89,
  vaccinated: 38942,
  activeOutbreaks: 2
};

const districtData = [
  { name: 'Thiruvananthapuram', migrants: 8945, screened: 8234, emergencies: 23 },
  { name: 'Kochi', migrants: 12456, screened: 11789, emergencies: 34 },
  { name: 'Kozhikode', migrants: 9876, screened: 9234, emergencies: 18 },
  { name: 'Thrissur', migrants: 7654, screened: 7123, emergencies: 15 },
  { name: 'Malappuram', migrants: 6743, screened: 6567, emergencies: 37 }
];

const healthTrends = [
  { disease: 'COVID-19', cases: 45, trend: 'decreasing', severity: 'low' },
  { disease: 'Dengue', cases: 23, trend: 'stable', severity: 'medium' },
  { disease: 'Typhoid', cases: 12, trend: 'increasing', severity: 'high' },
  { disease: 'Malaria', cases: 8, trend: 'decreasing', severity: 'low' }
];

const recentAlerts = [
  {
    id: 1,
    type: 'outbreak',
    message: 'Potential dengue outbreak in Kochi district - 15 new cases reported',
    timestamp: '2 hours ago',
    priority: 'high'
  },
  {
    id: 2,
    type: 'vaccination',
    message: 'Vaccination drive completed in Thiruvananthapuram - 95% coverage achieved',
    timestamp: '1 day ago',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'emergency',
    message: 'Emergency response activated for food poisoning case in Malappuram',
    timestamp: '2 days ago',
    priority: 'high'
  }
];

export default function GovernmentDashboard() {
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [reportType, setReportType] = useState('monthly');

  const handleBack = () => {
    navigate('/');
  };

  const handleExportData = () => {
    alert('Health data exported successfully!');
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
              <div>
                <h1 className="text-xl font-bold">Government Health Dashboard</h1>
                <p className="text-sm opacity-90">Kerala State Health & Labour Department</p>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <Card className="shadow-kerala">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Migrants</p>
                  <p className="text-2xl font-bold text-primary">{stateStats.totalMigrants.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-kerala">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Health Screened</p>
                  <p className="text-2xl font-bold text-health-good">{stateStats.healthScreened.toLocaleString()}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-health-good" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-kerala">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Vaccinated</p>
                  <p className="text-2xl font-bold text-health-good">{stateStats.vaccinated.toLocaleString()}</p>
                </div>
                <Heart className="h-8 w-8 text-health-good" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-kerala">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Emergency Cases</p>
                  <p className="text-2xl font-bold text-health-warning">{stateStats.emergencyCases}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-health-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-kerala">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hospitals</p>
                  <p className="text-2xl font-bold text-trust-navy">{stateStats.hospitalsCovered}</p>
                </div>
                <MapPin className="h-8 w-8 text-trust-navy" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-kerala">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Outbreaks</p>
                  <p className="text-2xl font-bold text-health-critical">{stateStats.activeOutbreaks}</p>
                </div>
                <Activity className="h-8 w-8 text-health-critical" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="districts">District-wise</TabsTrigger>
            <TabsTrigger value="health-trends">Health Trends</TabsTrigger>
            <TabsTrigger value="reports">Export Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Alerts */}
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Recent Health Alerts
                  </CardTitle>
                  <CardDescription>
                    Critical health notifications requiring attention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <div key={alert.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge 
                            variant="outline" 
                            className={
                              alert.priority === 'high' 
                                ? 'bg-health-critical/10 text-health-critical border-health-critical/30'
                                : 'bg-health-warning/10 text-health-warning border-health-warning/30'
                            }
                          >
                            {alert.type.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                        </div>
                        <p className="text-sm text-foreground">{alert.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Common administrative tasks and reports
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <EnhancedButton variant="kerala" className="w-full justify-start gap-3">
                    <BarChart3 className="h-4 w-4" />
                    Generate Health Summary Report
                  </EnhancedButton>
                  <EnhancedButton variant="trust" className="w-full justify-start gap-3">
                    <Users className="h-4 w-4" />
                    View Migrant Registration Stats
                  </EnhancedButton>
                  <EnhancedButton variant="health" className="w-full justify-start gap-3">
                    <Heart className="h-4 w-4" />
                    Vaccination Campaign Status
                  </EnhancedButton>
                  <EnhancedButton variant="medical" className="w-full justify-start gap-3">
                    <MapPin className="h-4 w-4" />
                    Hospital Capacity Report
                  </EnhancedButton>
                  <EnhancedButton variant="medical" className="w-full justify-start gap-3">
                    <AlertTriangle className="h-4 w-4" />
                    Emergency Response Status
                  </EnhancedButton>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="districts">
            <Card className="shadow-kerala">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  District-wise Health Statistics
                </CardTitle>
                <CardDescription>
                  Comprehensive health data across Kerala districts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger className="w-full md:w-64">
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Districts</SelectItem>
                      {districtData.map((district) => (
                        <SelectItem key={district.name} value={district.name.toLowerCase()}>
                          {district.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {districtData.map((district) => (
                    <div key={district.name} className="border rounded-lg p-4 hover:bg-medical-accent/20 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-foreground text-lg">{district.name}</h4>
                        <Badge 
                          variant="outline" 
                          className={
                            district.emergencies < 20 
                              ? 'bg-health-good/10 text-health-good border-health-good/30'
                              : district.emergencies < 30
                              ? 'bg-health-warning/10 text-health-warning border-health-warning/30'
                              : 'bg-health-critical/10 text-health-critical border-health-critical/30'
                          }
                        >
                          {district.emergencies} Emergencies
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Total Migrants</p>
                          <p className="font-semibold text-foreground">{district.migrants.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Health Screened</p>
                          <p className="font-semibold text-health-good">{district.screened.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Screening Rate</p>
                          <p className="font-semibold text-primary">
                            {Math.round((district.screened / district.migrants) * 100)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health-trends">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Health Trends & Disease Monitoring
                </CardTitle>
                <CardDescription>
                  Monitor disease patterns and health trends among migrant population
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthTrends.map((trend, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{trend.disease}</h4>
                          <p className="text-sm text-muted-foreground">{trend.cases} active cases</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge 
                            variant="outline" 
                            className={
                              trend.trend === 'decreasing' 
                                ? 'bg-health-good/10 text-health-good border-health-good/30'
                                : trend.trend === 'stable'
                                ? 'bg-health-warning/10 text-health-warning border-health-warning/30'
                                : 'bg-health-critical/10 text-health-critical border-health-critical/30'
                            }
                          >
                            {trend.trend}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={
                              trend.severity === 'low' 
                                ? 'bg-health-good/10 text-health-good border-health-good/30'
                                : trend.severity === 'medium'
                                ? 'bg-health-warning/10 text-health-warning border-health-warning/30'
                                : 'bg-health-critical/10 text-health-critical border-health-critical/30'
                            }
                          >
                            {trend.severity} severity
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="shadow-kerala">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Export Health Reports
                </CardTitle>
                <CardDescription>
                  Generate and export comprehensive health reports for analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Report Type</label>
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily Health Summary</SelectItem>
                        <SelectItem value="weekly">Weekly Report</SelectItem>
                        <SelectItem value="monthly">Monthly Analysis</SelectItem>
                        <SelectItem value="quarterly">Quarterly Review</SelectItem>
                        <SelectItem value="annual">Annual Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">District</label>
                    <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Districts</SelectItem>
                        {districtData.map((district) => (
                          <SelectItem key={district.name} value={district.name.toLowerCase()}>
                            {district.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <EnhancedButton variant="kerala" className="gap-2" onClick={handleExportData}>
                    <Download className="h-4 w-4" />
                    Export to Excel
                  </EnhancedButton>
                  <EnhancedButton variant="trust" className="gap-2" onClick={handleExportData}>
                    <FileText className="h-4 w-4" />
                    Export to PDF
                  </EnhancedButton>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    Reports are automatically shared with Central Health Ministry and Labour Ministry as per compliance requirements
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}