interface Props {
  onContactClick?: () => void;
}

const Footer: React.FC<Props> = ({ onContactClick }) => {
  return (
    <footer className="text-center p-8 bg-black border-t border-gray-800 relative z-10">
      <div className="text-green-400 font-mono text-sm mb-2">
        &gt; END_OF_PORTFOLIO.LOG
      </div>
      <div className="text-gray-500 font-mono text-xs">
        SYSTEM READY FOR NEW CHALLENGES |{" "}
        <a className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors cursor-pointer" onClick={onContactClick}> &gt; CONTACT.PROTOCOL_ACTIVE &lt; </a>
      </div>
    </footer>
  );
};

export default Footer;
