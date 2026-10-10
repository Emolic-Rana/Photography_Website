function ScrollRevealWindow() {
  return (
    // <section className="py-24  bg-ink flex justify-center">
    //   <div
    //     className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden border-4 border-ink shadow-2xl bg-fixed bg-center bg-cover"
    //     style={{ backgroundImage: "url('/images/home/statement-5.jpg')" }}
    //   >
    //     {/* Optional subtle vignette for the "peephole" feel */}
    //     <div className="absolute inset-0 shadow-[inset_0_0_60px_30px_rgba(0,0,0,0.5)]" />
    //   </div>
    // </section>
    <section className="relative w-full h-[40vh] md:h-[70vh] py-24 px-6 md:px-12 flex justify-center overflow-hidden">
        <div className="absolute inset-0 shadow-[inset_0_0_60px_30px_rgba(0,0,0,0.5)]" />
      {/* <div className="relative w-full max-w-5xl h-[40vh] md:h-[55vh] rounded-2xl border-4 border-ink shadow-2xl overflow-hidden ">
        Yahan koi background nahi — FixedVideoBackground iske through dikhega
      </div> */}
    </section>
  )
}

export default ScrollRevealWindow