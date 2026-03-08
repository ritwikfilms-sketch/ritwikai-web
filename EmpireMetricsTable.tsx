 import React from 'react';
import { 
  Users, Shield, Crown, Zap, TrendingUp, TrendingDown, 
  Activity, IndianRupee, Eye, Ban, Star, ArrowUpRight, 
  Film, AlertTriangle, Target, Gauge 
} from 'lucide-react'; // 'Block' को 'Ban' से बदल दिया गया है ताकि एरर खत्म हो जाए

const EmpireMetricsTable = () => {
  // आपका रीयल-टाइम डेटाबेस
  const metrics = [
    { label: 'Total Empire Members', value: '1,240', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Safety Guard Blocks', value: '12', change: 'Secure', icon: Ban, color: 'red' },
    { label: 'Revenue (Target ₹1L)', value: '₹45,000', change: '+₹15k', icon: IndianRupee, color: 'green' },
    { label: 'Automation Status', value: '72%', status: 'Active', icon: Zap, color: 'yellow' }
  ];

  return (
    <div className="p-6 bg-slate-900 rounded-3xl border border-blue-500/20 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Activity className="text-blue-400" /> Ritwik AI: Success Dashboard
        </h2>
        <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20 animate-pulse">
          70% AUTOMATION ACTIVE 🚀
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, index) => (
          <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all">
            <div className="flex justify-between items-start mb-2">
              <div className={⁠ p-2 bg-${item.color}-500/10 rounded-lg ⁠}>
                <item.icon className={⁠ w-5 h-5 text-${item.color}-400 ⁠} />
              </div>
              <span className="text-[10px] text-gray-400">{item.change || item.status}</span>
            </div>
            <p className="text-xs text-gray-400">{item.label}</p>
            <h3 className="text-lg font-bold text-white mt-1">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 bg-red-500/5 border border-red-500/20 rounded-xl flex items-center gap-3">
        <Shield className="text-red-400 w-4 h-4" />
        <p className="text-[11px] text-red-200">
          *Safety Guard Status:* IRONCLAD 🛡️ - 12 खतरे रोके गए।
        </p>
      </div>
    </div>
  );
};

export default EmpireMetricsTable;
