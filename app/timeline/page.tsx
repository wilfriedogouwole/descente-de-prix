"use client"

import { TimelineItem } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, Calendar } from 'lucide-react';
import Image from 'next/image';

const timelineItems: TimelineItem[] = [
  {
    id: '1',
    title: 'Construction de l\'offre',
    date: 'J-0',
    status: 'completed',
    icon: '🏗️'
  },
  {
    id: '2',
    title: 'Prise du rendez-vous pour la réunion de lancement',
    date: 'J-5',
    status: 'pending',
    icon: '📅'
  },
  {
    id: '3',
    title: 'Présentation du cahier des charges',
    date: 'J-5',
    status: 'pending',
    icon: '📋'
  },
  {
    id: '4',
    title: 'Réception du mail de bienvenue et lien vers le CDC',
    date: 'J-5',
    status: 'pending',
    icon: '📧'
  },
  {
    id: '5',
    title: 'Installation et paramétrage de la OBOX',
    date: 'J-5',
    status: 'pending',
    icon: '⚙️'
  },
  {
    id: '6',
    title: 'Prise du rendez-vous pour la prise de photos/vidéos',
    date: 'J-10',
    status: 'pending',
    icon: '📸'
  },
  {
    id: '7',
    title: 'Réunion de lancement',
    date: 'J-15',
    status: 'pending',
    icon: '🚀'
  }
];

export default function Timeline() {
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
          <h1 className="text-3xl font-light text-gray-700">VOTRE CALENDRIER DE MISE EN PLACE</h1>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  {item.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Clock className="w-6 h-6 text-blue-500" />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}