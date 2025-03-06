"use client"

import { Package } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { MonitorCog as MonitorCode, MessageSquare, FileText, Shield } from 'lucide-react';
import Image from 'next/image';

const packages: Package[] = [
  {
    id: 'webup',
    name: 'WEBUP',
    color: 'bg-yellow-100',
    icon: '💻',
    features: [
      { icon: '🌐', name: 'Site web responsive' },
      { icon: '🔧', name: 'Maintenance technique' },
      { icon: '📊', name: 'Analytics avancés' },
      { icon: '🔍', name: 'SEO optimisé' },
      { icon: '💾', name: 'Hébergement sécurisé' },
      { icon: '🔄', name: 'Mises à jour régulières' },
      { icon: '📱', name: 'Applications mobiles' },
      { icon: '⚡', name: 'Performance optimisée' }
    ]
  },
  {
    id: 'social',
    name: 'SOCIAL+',
    color: 'bg-blue-100',
    icon: '📱',
    features: [
      { icon: '📣', name: 'Gestion des réseaux sociaux' },
      { icon: '👥', name: 'Community management' },
      { icon: '📊', name: 'Analyse des performances' },
      { icon: '🎯', name: 'Publicité ciblée' },
      { icon: '📅', name: 'Planification de contenu' },
      { icon: '✨', name: 'Création de contenu' },
      { icon: '📈', name: 'Rapports mensuels' }
    ]
  },
  {
    id: 'ged',
    name: 'GED',
    color: 'bg-purple-100',
    icon: '📄',
    features: [
      { icon: '📁', name: 'Gestion documentaire' },
      { icon: '🔍', name: 'Recherche avancée' },
      { icon: '🔄', name: 'Workflow automatisé' },
      { icon: '📊', name: 'Tableaux de bord' },
      { icon: '🔐', name: 'Sécurité des données' },
      { icon: '📱', name: 'Accès mobile' },
      { icon: '🔄', name: 'Synchronisation' },
      { icon: '📈', name: 'Rapports personnalisés' },
      { icon: '⚡', name: 'Performance optimisée' }
    ]
  },
  {
    id: 'shield',
    name: 'SHIELD',
    color: 'bg-gray-100',
    icon: '🛡️',
    features: [
      { icon: '🔒', name: 'Protection avancée' },
      { icon: '🔍', name: 'Surveillance 24/7' },
      { icon: '🚨', name: 'Alertes en temps réel' },
      { icon: '🔄', name: 'Backup automatique' },
      { icon: '📊', name: 'Rapports de sécurité' },
      { icon: '🛡️', name: 'Protection DDoS' }
    ]
  }
];

export default function Features() {
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
          <h1 className="text-3xl font-light text-gray-700">VOS FONCTIONNALITÉS COMBINÉES</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`p-6 ${pkg.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{pkg.icon}</span>
                <h2 className="text-xl font-bold">{pkg.name}</h2>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-2">
                    <span className="text-2xl mb-2">{feature.icon}</span>
                    <span className="text-sm">{feature.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}