export default [
  {
    title: 'Dashboards',
    icon: { icon: 'tabler-smart-home' },
    children: [
      { 
        title: 'YTK Dashboard', 
        to: 'dashboards-dashboard-ytk', 
      },
      { 
        title: 'ESD Dashboard', 
        to: 'dashboards-dashboard-esd', 
      },
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
      {
        title: 'Ecommerce',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'Academy',
        to: 'dashboards-academy',
      },
      {
        title: 'Logistics',
        to: 'dashboards-logistics',
      },
    ],
    badgeContent: '7',
    badgeClass: 'bg-error',
  },
]
