export default function MediGuiaEnfermeriaLanding() {
  const features = [
    {
      title: "Reducción real de tiempo",
      desc: "Convierte un proceso de más de 5 horas en un flujo guiado que puede completarse en mucho menos tiempo.",
    },
    {
      title: "Banco de patologías",
      desc: "Selecciona una patología y visualiza síntomas frecuentes, posibles y no típicos para construir casos coherentes.",
    },
    {
      title: "Estructura automática",
      desc: "Organiza anamnesis, valoración, diagnósticos, NOC, NIC y evaluación dentro de un formato ordenado.",
    },
    {
      title: "Pensada para estudiantes",
      desc: "Diseñada para facilitar la redacción de PAE sin reemplazar el criterio clínico ni el análisis de enfermería.",
    },
  ];

  const steps = [
    "Selecciona la patología o inicia un caso desde cero.",
    "Completa los datos del paciente y la valoración inicial.",
    "Elige síntomas compatibles y ajusta el caso clínico.",
    "Genera la base del PAE y edita lo necesario antes de exportar.",
  ];

  const sections = [
    "Datos del paciente",
    "Patología y procedimiento",
    "Valoración y entrevista",
    "Anamnesis",
    "Diagnósticos NANDA",
    "NOC y NIC",
    "Plan de cuidados",
    "Evaluación final",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">MediGuía</p>
            <h1 className="text-xl font-bold">Enfermería</h1>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#inicio" className="transition hover:text-white">Inicio</a>
            <a href="#funciones" className="transition hover:text-white">Funciones</a>
            <a href="#como-funciona" className="transition hover:text-white">Cómo funciona</a>
            <a href="#demo" className="transition hover:text-white">Demo</a>
          </nav>

          <button className="rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
            Crear PAE
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_25%)]" />

          <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Plataforma para crear PAE más rápido
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Crea tu <span className="text-cyan-300">PAE</span> con menos carga y más orden
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                MediGuía Enfermería está pensada para ayudarte a organizar casos clínicos, seleccionar síntomas coherentes y generar una base estructurada del Proceso de Atención en Enfermería sin perder horas en lo repetitivo.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.02]">
                  Empezar demo
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Ver estructura
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">+5h</p>
                  <p className="mt-1 text-sm text-slate-300">Tiempo que suele tomar hacerlo manualmente</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">30–60m</p>
                  <p className="mt-1 text-sm text-slate-300">Meta del flujo guiado de la plataforma</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">1 sistema</p>
                  <p className="mt-1 text-sm text-slate-300">Para ordenar valoración, diagnósticos y plan</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Vista previa</p>
                    <h3 className="text-xl font-bold">Nuevo PAE</h3>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    Flujo guiado
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Patología seleccionada</p>
                    <p className="mt-1 font-semibold">Aumento de la presión intracraneal</p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Síntomas compatibles</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "Cefalea intensa",
                        "Náuseas",
                        "Vómitos",
                        "Fotofobia",
                        "Mareo",
                        "Alteración del descanso",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Secciones que se generarán</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {sections.map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="funciones" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Funciones</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">Lo que hace fuerte a MediGuía Enfermería</h3>
            <p className="mt-4 text-slate-300">
              La idea no es reemplazar el razonamiento clínico, sino quitar la carga repetitiva y ordenar el trabajo para que crear un PAE sea más rápido y coherente.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                <div className="mb-4 h-11 w-11 rounded-2xl bg-cyan-400/15" />
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Cómo funciona</p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">Un flujo simple para construir un PAE</h3>
              <div className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-bold text-slate-950">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="demo" className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Demo del generador</p>
                  <h4 className="text-2xl font-bold">Caso guiado</h4>
                </div>
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  Beta visual
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Patología</label>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                    Seleccionar patología...
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Etapa clínica</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Preoperatorio",
                      "Postoperatorio",
                      "Hospitalización",
                      "Consulta externa",
                    ].map((item) => (
                      <button
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Síntomas sugeridos</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Dolor",
                      "Fiebre",
                      "Náuseas",
                      "Debilidad",
                      "Ansiedad",
                      "Pérdida del apetito",
                    ].map((item, i) => (
                      <button
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-sm transition ${
                          i < 4
                            ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                            : "border border-white/10 bg-white/5 text-slate-300"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-cyan-400/30 bg-cyan-400/5 p-4 text-sm leading-7 text-slate-300">
                  Aquí después conectaremos el banco de patologías, la lógica de síntomas compatibles y la generación de texto base para el PAE.
                </div>

                <button className="w-full rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]">
                  Continuar al formulario
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-slate-900 to-slate-900 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Objetivo</p>
              <h3 className="mt-3 text-3xl font-bold md:text-5xl">
                Menos tiempo copiando, más tiempo pensando el caso
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                La meta de esta plataforma es ayudarte a construir PAE con una base más rápida, mejor organizada y clínicamente coherente, para que el esfuerzo se enfoque en el criterio de enfermería y no en repetir formato una y otra vez.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]">
                  Probar demo
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Ver próximas funciones
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
