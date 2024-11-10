import Image from "next/image";

import logo from "./assets/logo.svg";
import womanImg from "./assets/woman.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, MenuIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function Home() {
  return (
    <main>
      <section className="container mx-auto text-center pb-20 px-2 md:px-0">
        <nav className="flex justify-between items-center py-4">
          <Image src={logo} width={129} height={40} alt="LivroSass" />
        
          <DropdownMenu>
            <DropdownMenuTrigger>  <MenuIcon size={24} className="md:hidden cursor-pointer" /></DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Funcionamento</DropdownMenuItem>
              <DropdownMenuItem>Preço</DropdownMenuItem>
              <DropdownMenuItem>
              <Button variant={"bg-white"}>Login</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="items-center gap-1 hidden md:flex">
            <Button variant={"link"}>Funcionamento</Button>
            <Button variant={"link"}>Preço</Button>
            <Button variant={"bg-white"}>Login</Button>
          </div>
        </nav>

        <h1 className="text-2xl md:text-6xl font-bold mt-8 md:mt-16 ">
          Simplifique Seus Estudos{" "}
        </h1>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </p>
        <form className="mt-8 md:mt-16">
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <Input
              type="email"
              placeholder="Coloque seu email"
              className=" md:max-w-sm border border-gray-300"
            />
            <Button>Assine Agora</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Comece sua assinatura agora mesmo. Cancele quando quiser.
          </p>
        </form>
      </section>

      <section className="bg-white py-8 md:py-16">
       <div className=" container mx-auto">
       <h2 className="text-2xl md:text-4xl font-bold text-center">Como funciona?</h2>
        <div className="mx-24 xl:mx-80 flex flex-col md:flex-row items-center justify-between">
          <Image 
          src={womanImg} 
          alt="Como Funciona?" 
          className="max-w-xs" 
          />

          <ul className="text-lg md:text-2xl text-muted-foreground space-y-4 md:space-y-6 flex-shrink-0">
            <li className="flex items-center justify-between gap-4">
              Acesso a 1 ebook por mês{" "}
              <Check className="text-green-600" size={24} />
            </li>
            <li className="flex items-center justify-between gap-4">
              Curadoria especial <Check className="text-green-600" size={24} />
            </li>
            <li className="flex items-center justify-between gap-4">
              Cancele quando quiser{" "}
              <Check className="text-green-600" size={24} />
            </li>
          </ul>
        </div>
       </div>
      </section>

      <section className="container mx-auto text-center py-8 md:py-16 px-2">
        <h2 className="text-2xl md:text-6xl font-bold mt-8 md:mt-16 ">
          Preço Simples e Transparente
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine o nosso plano mensal Pro Premium VIP e garanta
          mensalmente um ebook novo de programação. E por menos de um café por
          dia.
        </p>
        <Card className="w-[350px] mx-auto text-left mt-10 md:mt-20">
          <CardHeader>
            <CardTitle>Plano Pro Premium Vip</CardTitle>
            <CardDescription>
              Tudo que você precisa para seus estudos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold mb-8 mt-4">
              R$29
              <span className="font-normal text-muted-foreground text-lg">
                /mês
              </span>
            </p>
            <ul>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />1 ebook por mês
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />
                Curadoria especial
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />
                Acesso ilimitado
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />
                Cancele a qualquer momento
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Assine Agora</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="bg-white py-8 md:py-16 text-center">
      <h2 className="text-2xl md:text-6xl font-bold mt-8 md:mt-16 ">
          Pronto Para Mudar Sua Vida?
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos{" "}
        </p>
        <Button className=" md:px-0 mt-14 w-full md:w-96">Assine Agora</Button>
        <p className="text-xs text-muted-foreground mt-2">Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
        <footer className="mt-16 border-t border-gray-300 pt-10">
        <Image src={logo} width={129} height={40} alt="LivroSass"  className="mx-auto"/>
          <p className="text-muted-foreground">© 2024 LivroSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  );
}
