
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; index: number }> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className="border-b border-border-dark last:border-none group">
      <button 
        className="w-full py-6 px-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
        onClick={onClick}
      >
        <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-gray-600 group-hover:text-accent-green transition-colors">0{index + 1}</span>
            <span className={`font-display uppercase tracking-wider text-sm md:text-base ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                {question}
            </span>
        </div>
        <div className={`relative w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            <div className="absolute top-1/2 left-0 w-4 h-px bg-accent-green"></div>
            <div className="absolute top-0 left-1/2 w-px h-4 bg-accent-green -translate-x-1/2"></div>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pl-14 pb-8 text-sm text-gray-500 font-mono leading-relaxed max-w-3xl">
            <span className="text-accent-green mr-2">{`>>`}</span>
            {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does ZeroSignal integrate with existing infrastructure?",
      answer: "ZeroSignal operates as a sidecar proxy. You simply install our lightweight agent on your edge nodes. It captures egress/ingress traffic via eBPF hooks without requiring kernel modifications or application restarts."
    },
    {
      question: "Is there a significant latency penalty?",
      answer: "Our neural inference engine runs on bare metal optimization, adding less than 14ms of latency to the round-trip time. For most applications, this is indistinguishable from standard network jitter."
    },
    {
      question: "What happens during a false positive?",
      answer: "In 'Observer' mode, we only log anomalies. In 'Operator' mode, flagged packets are sandboxed for 50ms for deep inspection. If benign, they are released. You can whitelist signatures instantly via the dashboard."
    },
    {
      question: "Is the encryption compliant with GDPR/CCPA?",
      answer: "Yes. All data interception happens locally. Only anonymized threat vectors (metadata) are sent to our global mesh for heuristic training. PII never leaves your infrastructure."
    },
    {
      question: "Can I self-host the neural core?",
      answer: "Self-hosting is available for the 'Architect' tier. We provide a Docker container or Helm chart for deploying the inference engine within your own VPC or air-gapped environment."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-16 border-t border-border-dark bg-bg scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* Left Header */}
        <div className="md:w-1/3">
           <div className="mb-8 pl-6 border-l-2 border-accent-green sticky top-32">
                <span className="block text-accent-green text-xs font-mono mb-2">06 // SYSTEM INQUIRIES</span>
                <h2 className="text-4xl font-display font-bold uppercase leading-tight mb-6">
                  Protocol<br />Details
                </h2>
                <p className="text-xs text-gray-500 font-mono leading-relaxed mb-8">
                    Common questions regarding implementation, latency, and compliance standards.
                </p>
                <button className="text-xs font-bold border border-gray-700 px-6 py-3 hover:border-white hover:text-white text-gray-400 uppercase transition-colors">
                    Documentation Hub
                </button>
           </div>
        </div>

        {/* Right Accordion */}
        <div className="md:w-2/3 border-t border-border-dark">
            {faqs.map((faq, i) => (
                <FAQItem 
                    key={i} 
                    index={i}
                    question={faq.question} 
                    answer={faq.answer} 
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
