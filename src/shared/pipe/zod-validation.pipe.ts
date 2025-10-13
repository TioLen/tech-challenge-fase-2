import { PipeTransform, BadRequestException, ArgumentMetadata } from "@nestjs/common";
import { ZodSchema, ZodError } from "zod";

export class ZodValidationPipe implements PipeTransform {
    constructor(
        private schema: ZodSchema,
    ) {}

    transform(value: any, metadata: ArgumentMetadata) {
        try { 
            const parsedValue = this.schema.parse(value);
            return parsedValue;
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                }));
                
                throw new BadRequestException({
                    message: 'Dados de validação inválidos',
                    errors: errorMessages,
                });
            }
            throw new BadRequestException('Erro de validação');
        }
    }
}