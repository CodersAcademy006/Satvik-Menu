import MenuViewer from "@/components/MenuViewer";

const Index = () => {
  // Points to the PDF file in the public folder
  const menuPdfPath = "/Satvik menu1.0.pdf";

  return (
    <main className="h-screen w-screen overflow-hidden">
      <MenuViewer pdfPath={menuPdfPath} />
    </main>
  );
};

export default Index;
