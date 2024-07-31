/*
 Cliente validam Trabalho

Registro da validação
	- Nome autor
	- CPF
	- Titulo do trabalho
	- Data da produção

Registro validado por um profissional
	- Data da analise
	- Matricula
	- Status(deferido/indeferido)

Cliente acompanha analise
	- Consulta ao registro
	- Protocolo

Profissional e Cliente São Usuarios
	- CPF
	- Nome
	- Email

	- Matricula(Profissionais)

Cliente pode emitir certificado do trabalho submetido a analise
	- Receber(em casa/ outro)	
 */

 public class RegistroValidacao {
    String nomeAutor;
    int cpf;
    String tituloTrabalho;
    String dataProducao;
 }

    RegistroValidacao trabalho = new RegistroValidacao();
        trabalho.nomeAutor = "Carlos";
        trabalho.cpf = 123456789;
        trabalho.tituloTrabalho = "Trabalho de Conclusão";
        trabalho.dataProducao = "01/01/2021";
    

 public class Usuario {
    int cpf;
    String nome;
    String email;
 }

 Usuario cliente = new Usuario();
    cliente.cpf = 123456789;
    cliente.nome = "João";
    cliente.email = "joao@email.com";

    Usuario profissional = new Usuario();
    profissional.cpf = 987654321;
    profissional.nome = "Maria";
    profissional.email = "MARIA@EMAIL";

    public class RegistroValidado {
        String dataAnalise;
        int matricula;
        String status;
    }   

    RegistroValidado validacao = new RegistroValidado();
        validacao.dataAnalise = "01/02/2021";
        validacao.matricula = 123;
        validacao.status = "Deferido";


