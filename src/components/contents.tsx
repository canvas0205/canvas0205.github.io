const Contents: React.FC = () => {
  return (
    <div className="flex-1 p-8">
      <section id="home" className="h-screen bg-blue-200 mb-8">
        <h2 className="text-3xl">Home Section</h2>
        <p>This is the home section.</p>
      </section>
      <section id="about" className="h-screen bg-green-200 mb-8">
        <h2 className="text-3xl">About Section</h2>
        <p>This is the about section.</p>
      </section>
      <section id="contact" className="h-screen bg-red-200 mb-8">
        <h2 className="text-3xl">Contact Section</h2>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
};

export default Contents;