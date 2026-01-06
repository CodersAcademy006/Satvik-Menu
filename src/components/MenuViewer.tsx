interface MenuViewerProps {
  pdfPath?: string;
}

const MenuViewer = ({ pdfPath }: MenuViewerProps) => {
  if (!pdfPath) {
    return (
      <div className="pdf-container flex items-center justify-center bg-card rounded-sm">
        <div className="text-center px-6 py-16">
          <p className="text-muted-foreground font-body text-sm tracking-wide uppercase">
            Menu coming soon
          </p>
          <p className="text-muted-foreground/60 font-body text-xs mt-2">
            Place your PDF in public/Satvik menu1.0.pdf          </p>
        </div>
      </div>
    );
  }

  // Add parameter to hide PDF toolbar
  const pdfUrlWithParams = `${pdfPath}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <div className="w-full h-full">
      {/* Primary: Native PDF embed for best mobile experience */}
      <object
        data={pdfUrlWithParams}
        type="application/pdf"
        className="w-full h-full border-0 block"
      >
        {/* Fallback: iframe for browsers that don't support object */}
        <iframe
          src={pdfUrlWithParams}
          title="Restaurant Menu"
          className="w-full h-full border-0 block"
        >
          {/* Final fallback: download link */}
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Unable to display PDF
            </p>
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-foreground text-background font-body text-sm tracking-wide uppercase rounded-sm"
            >
              View Menu
            </a>
          </div>
        </iframe>
      </object>
    </div>
  );
};

export default MenuViewer;
