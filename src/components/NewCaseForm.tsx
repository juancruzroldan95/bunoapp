import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@/components/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { createCase } from '@/lib/cases/createCase';

const FormSchema = z.object({
  description: z.string().min(100, {
    message: 'Usá al menos 100 caracteres.',
  }),
  location: z.enum(['caba', 'provincia']),
});

export function NewCaseForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const caseId = await createCase(data);
      toast({
        title: 'Case Published:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify({ ...data, id: caseId }, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error Publishing Case',
        description:
          'There was an error publishing your case. Check the console.',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>
          Una buena descripción incluye:
          <ul className="list-disc pl-4">
            <li>Detalles únicos sobre su proyecto o necesidades legales.</li>
            <li>Cronograma del proyecto y entregables esperados.</li>
            <li>Sus expectativas presupuestarias.</li>
            <li>Experiencia legal específica que necesita.</li>
          </ul>
        </FormDescription>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel className="mr-6">¿De dónde sos?</FormLabel>
                <FormControl>
                  <ToggleGroup
                    variant="outline"
                    type="single"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <ToggleGroupItem value="caba">CABA</ToggleGroupItem>
                    <ToggleGroupItem value="provincia">
                      Provincia
                    </ToggleGroupItem>
                  </ToggleGroup>
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-2">
          {/* <Button type="button" variant="secondary">
            Cancelar
          </Button> */}
          <Button type="submit">Publicar</Button>
        </div>
      </form>
    </Form>
  );
}
