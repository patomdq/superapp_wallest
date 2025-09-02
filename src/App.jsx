<iframe 
  src="https://airtable.com/appDbcUJDh3KLo70L/shrBDLlxKlqEYsyLp" 
  width="100%" 
  height="600" 
  style={{ border: "none", borderRadius: "12px" }}
  title="HQ Wallest"
/>

import React, { useState, useEffect } from "react";
export default function App() {
  return (
    <>
      <div className="w-full h-[80vh] p-4">
        <iframe
          src="https://airtable.com/appDbcUJDh3KLo70L/shrBDLlxk1qEYSyLp"
          width="100%"
          height="100%"
          style={{ border: "none", borderRadius: "12px" }}
          title="HQ Wallest"
        />
      </div>

<div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-40">
<div className="bg-white rounded-2xl p-6 max-w-lg w-full">
<div className="flex items-center justify-between mb-3">
<h4 className="font-semibold">Materiales — {activeMaterials?.title || 'Semana seleccionada'}</h4>
<button onClick={() => setShowMaterials(false)} className="w-8 h-8 rounded-full bg-gray-100">×</button>
</div>
<ul className="list-disc pl-5 text-sm space-y-1">
{(activeMaterials?.items || ["Ver temario completo en documentación"]).map((txt, i) => (
<li key={i}>{txt}</li>
))}
</ul>
</div>
</div>
)}


<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h3 className="text-lg font-semibold">MBA Wallest</h3>
<p className="text-sm text-gray-600">Selecciona el plan y registra tu jornada</p>
</div>
<div className="flex items-center gap-2">
<button onClick={() => { setModo('mba12'); setSemana(1); }} className={`px-3 py-2 rounded-2xl shadow ${modo === 'mba12' ? 'bg-black text-white' : 'bg-white'}`}>Plan 12 Semanas</button>
<button onClick={() => { setModo('mba30'); setSemana(1); }} className={`px-3 py-2 rounded-2xl shadow ${modo === 'mba30' ? 'bg-black text-white' : 'bg-white'}`}>Plan 30 Días</button>
<select value={semana} onChange={(e) => setSemana(Number(e.target.value))} className="bg-white rounded-2xl px-3 py-2 shadow">
{(modo === 'mba12' ? semanas12 : semanas30).map((s) => (<option key={s.id} value={s.id}>{s.titulo}</option>))}
</select>
</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="col-span-1 bg-white rounded-2xl p-5 shadow">
<div className="flex items-center justify-between mb-3"><h4 className="font-semibold">Progreso diario</h4><span className="text-sm text-gray-500">{progreso}%</span></div>
<div className="w-full h-3 bg-gray-200 rounded-full mb-4"><div className="h-3 bg-black rounded-full" style={{ width: `${progreso}%` }} /></div>
<ul className="space-y-2">
{[
{ key: "lectura", label: "Lectura 30'" },
{ key: "video", label: "Vídeo/apunte 30'" },
{ key: "ejercicio", label: "Ejercicio aplicado 30'" },
{ key: "diario", label: "Diario de 3 preguntas" },
].map((item) => (
<li key={item.key} className="flex items-center justify-between">
<label className="flex items-center gap-2">
<input type="checkbox" className="w-4 h-4" checked={checks[item.key]} onChange={(e) => setChecks({ ...checks, [item.key]: e.target.checked })} />
<span>{item.label}</span>
</label>
{checks[item.key] && <span className="text-xs text-green-600">OK</span>}
</li>
))}
</ul>
</div>


<div className="col-span-1 bg-white rounded-2xl p-5 shadow">
<h4 className="font-semibold mb-3">KPIs del día</h4>
<div className="space-y-3">
{[
{ key: "llamadasApis", label: "Llamadas APIs/servicers", target: ">=10" },
{ key: "reunionesInv", label: "Reuniones inversores", target: ">=1/3d" },
{ key: "visitas", label: "Visitas a inmuebles", target: ">=1/día" },
{ key: "ofertas", label: "Ofertas redactadas", target: ">=2/sem" },
].map((k) => (
<div key={k.key} className="border rounded-2xl p-3">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-medium truncate">{k.label}</p>
<p className="text-xs text-gray-500">Objetivo: {k.target}</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<button aria-label={`Disminuir ${k.label}`} onClick={() => dec(k.key)} disabled={kpis[k.key] === 0} className="w-8 h-8 rounded-full bg-gray-100 disabled:opacity-40">−</button>
<input type="number" inputMode="numeric" value={kpis[k.key]} onChange={(e) => setKpis((s) => ({ ...s, [k.key]: Math.max(0, parseInt(e.targe
