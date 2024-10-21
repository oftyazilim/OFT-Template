export default [
  { heading: "Üretim" },
  {
    title: "Üretim",
    icon: { icon: "tabler-chart-donut-2" },
    children: [
      {
        title: "İş Emirleri",
        to: "planlama-isemirleri",
      },
      {
        title: "Mamül Kartları",
        to: "planlama-mamulkartlari",
        action: "manage",
        subject: "all",
      },
      {
        title: "Üretim Girişleri",
        to: "planlama-uretimgirisleri",
      },
    ],
  },
];
