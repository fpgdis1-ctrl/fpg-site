import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ShieldCheck, Camera, Lock, Users, Wrench } from "lucide-react";

export default function FPGSite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FPG Technology Solutions</h1>
          <a href="https://wa.me/554232365457">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Fale no WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Segurança Eletrônica e Controle de Acesso
        </h2>
        <p className="text-lg mb-6">
          Mais de 18 anos ajudando profissionais a entregar soluções seguras e eficientes
        </p>
        <a href="https://wa.me/554232365457">
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3">
            Solicitar Orçamento
          </Button>
        </a>
      </section>

      {/* Diferenciais */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">
          Por que escolher a FPG?
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-4" size={40} />
              <h4 className="font-bold text-xl mb-2">Parceria de Verdade</h4>
              <p>Mais do que vender, ajudamos nossos clientes a crescer e ter sucesso.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto mb-4" size={40} />
              <h4 className="font-bold text-xl mb-2">Especialização Técnica</h4>
              <p>Equipe com conhecimento prático para indicar a melhor solução.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <Wrench className="mx-auto mb-4" size={40} />
              <h4 className="font-bold text-xl mb-2">Suporte Completo</h4>
              <p>Atendimento ágil, suporte técnico e pós-venda que realmente funciona.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">
            Soluções que oferecemos
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Camera className="mb-4" />
                <h4 className="font-bold text-lg mb-2">CFTV</h4>
                <p>Câmeras, DVRs e sistemas completos de monitoramento.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Lock className="mb-4" />
                <h4 className="font-bold text-lg mb-2">Controle de Acesso</h4>
                <p>Biometria, fechaduras e soluções inteligentes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <ShieldCheck className="mb-4" />
                <h4 className="font-bold text-lg mb-2">Segurança Eletrônica</h4>
                <p>Alarmes, cercas elétricas e proteção completa.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Trabalhamos com as melhores marcas</h3>
        <p className="mb-10">Qualidade e confiabilidade para seus projetos</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
          <img src="https://logo.clearbit.com/ppa.com.br" className="mx-auto h-10" />
          <img src="https://logo.clearbit.com/hikvision.com" className="mx-auto h-10" />
          <img src="https://logo.clearbit.com/controlid.com.br" className="mx-auto h-10" />
          <img src="https://logo.clearbit.com/ruijienetworks.com" className="mx-auto h-10" />
          <img src="https://logo.clearbit.com/jfl.com.br" className="mx-auto h-10" />
        </div>
      </section>

      {/* Clientes */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Quem atendemos</h3>
          <p className="text-lg mb-6">
            Atendemos profissionais e empresas que atuam com segurança e automação
          </p>
          <ul className="space-y-2">
            <li>• Técnicos instaladores e MEIs</li>
            <li>• Empresas de segurança e monitoramento</li>
            <li>• Eletricistas, serralheiros e vidraceiros</li>
            <li>• Lojas de informática e redes</li>
            <li>• Chaveiros e profissionais de automação</li>
          </ul>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Sobre a FPG</h3>
          <p className="text-lg">
            Desde 2007, a FPG Technology Solutions atua em Ponta Grossa e região
            oferecendo soluções em segurança eletrônica e automação. Mais do que
            uma distribuidora, somos parceiros dos profissionais que levam
            tecnologia e proteção aos seus clientes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Precisa de suporte ou orçamento?
        </h3>
        <a href="https://wa.me/554232365457">
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3">
            Falar com especialista
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 text-center">
        <p>FPG Technology Solutions</p>
        <p>Ponta Grossa e região | Atendimento em todo o Brasil</p>
        <p className="flex items-center justify-center gap-2 mt-2">
          <Phone size={16} /> (42) 3236-5457
        </p>
      </footer>
    </div>
  );
}
