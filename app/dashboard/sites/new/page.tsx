import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute(){
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Card className="max-w-[450px]">
                <CardHeader>
                    <CardTitle>Criar Sites</CardTitle>
                    <CardDescription>Crie seu site aqui! Click no botão abaixo...</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="grid gap-2">
                            <Label>Nome do Site</Label>
                            <Input placeholder="ex: Google, MercadoLivre..."/>
                        </div>

                        <div className="grid gap-2">
                            <Label>Subdiretório</Label>
                            <Input placeholder="ex: meublog, minha-pagina..."/>
                        </div>

                        <div className="grid gap-2">
                            <Label>Descrição</Label>
                            <Textarea placeholder="Faça um pequena descrição de seu site" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Criar</Button>
                </CardFooter>
            </Card>
        </div>
    )
}