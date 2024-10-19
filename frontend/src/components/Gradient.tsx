
const Gradient = ({ inside}: {inside: any}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-600 to-green-400">
        {inside}
    </div>
  );
};

export default Gradient;
