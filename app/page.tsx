"use client"

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Package, PricingOption, SelectedPackages } from '@/lib/types';
import { Crown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const packages: Package[] = [
  {
    id: 'webup',
    name: 'WEBUP',
    color: 'bg-yellow-100',
    icon: '💻',
    features: [
      { icon: '🌐', name: 'Site web' },
      { icon: '💾', name: 'Hébergement' },
      { icon: '🔧', name: 'Maintenance' },
      { icon: '🔍', name: 'SEO' }
    ]
  },
  {
    id: 'social',
    name: 'SOCIAL+',
    color: 'bg-blue-100',
    icon: '📱',
    features: [
      { icon: '📱', name: 'Réseaux sociaux' },
      { icon: '👥', name: 'Community management' },
      { icon: '📣', name: 'Publicité' }
    ]
  },
  {
    id: 'ged',
    name: 'GED',
    color: 'bg-purple-100',
    icon: '📄',
    features: [
      { icon: '📁', name: 'Gestion documentaire' },
      { icon: '📦', name: 'Archivage' },
      { icon: '🔄', name: 'Workflow' }
    ]
  },
  {
    id: 'shield',
    name: 'SHIELD',
    color: 'bg-gray-100',
    icon: '🛡️',
    features: [
      { icon: '🔒', name: 'Sécurité' },
      { icon: '🛡️', name: 'Protection' },
      { icon: '👀', name: 'Surveillance' }
    ]
  }
];

const pricingOptions: PricingOption[] = [
  {
    duration: 12,
    monthlyPrice: 399,
    yearlyPrice: 4788
  },
  {
    duration: 48,
    monthlyPrice: 189,
    yearlyPrice: 2268,
    discount: 53,
    savings: 2528
  }
];

export default function Home() {
  const [selectedPackages, setSelectedPackages] = useState<SelectedPackages>({});

  const togglePackage = (packageId: string) => {
    setSelectedPackages(prev => ({
      ...prev,
      [packageId]: !prev[packageId]
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/oboxia-logo.png"
            alt="Oboxia"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
          <h1 className="text-3xl font-light text-gray-700">VOTRE OFFRE SUR-MESURE</h1>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedPackages[pkg.id] ? 'ring-2 ring-primary' : ''
                } ${pkg.color}`}
                onClick={() => togglePackage(pkg.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{pkg.icon}</span>
                    <span className="font-bold">{pkg.name}</span>
                  </div>
                  <Button
                    variant={selectedPackages[pkg.id] ? "default" : "outline"}
                    size="icon"
                    className="h-8 w-8"
                  >
                    {selectedPackages[pkg.id] ? "✓" : "+"}
                  </Button>
                </div>
                {selectedPackages[pkg.id] && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span>{feature.icon}</span>
                        <span>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="md:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              {pricingOptions.map((option) => (
                <Card key={option.duration} className="p-6 relative">
                  {option.discount && (
                    <div className="absolute top-4 right-4">
                      <Crown className="h-6 w-6 text-yellow-500" />
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-medium">{option.duration} mois</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">MONTANT MENSUEL</p>
                      <p className="text-3xl font-bold">{option.monthlyPrice}€</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">MONTANT ANNUEL</p>
                      <p className="text-2xl font-semibold">{option.yearlyPrice}€</p>
                    </div>
                    {option.discount && (
                      <div className="bg-green-100 p-4 rounded-lg text-center">
                        <p className="text-green-800">
                          UNE ÉCONOMIE DE {option.discount}%
                        </p>
                        <p className="text-green-800 font-bold">
                          SOIT - {option.savings}€
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}