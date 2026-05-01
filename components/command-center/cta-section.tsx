import { SecureCommsTerminal } from "@/components/command-center/secure-comms-terminal";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full min-w-0 max-w-7xl pb-16 pt-4"
    >
      <div className="mb-6 border-b border-zinc-800 pb-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
          Secure comms
        </p>
        <h2 className="font-heading mt-1 text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
          Pre-qualification channel
        </h2>
      </div>
      <SecureCommsTerminal />
    </section>
  );
}
