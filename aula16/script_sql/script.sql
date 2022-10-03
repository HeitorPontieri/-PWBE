# = Comentário 
#Permite visualizar todos os databases existentes no BD
show databases;

# Permite apagar um database e toda a estrutura de tabela contida nele
    drop database dbcontatos2022_2;

# Permite criar um database no BD 
    create database db_lion_school;

# Permite ativar a utilização de um database
    use db_lion_school;

# Permite visualizar todas as tabelas existentes dentro de um database
    show tables;

# Permite criar tabelas e seus atributos
    create table tbl_aluno (
        # Permite criar criar o atributo id e seus parametros 
        id int UNSIGNED not null auto_increment primary key ,
        nome varchar(80) not null,
        # Como criar um atributo
        # nome_do_atributo tipo_do_atributo(qntd de caracteres) parametros
        foto varchar(100) not null,
        sexo varchar(1),
        rg varchar(15) not null,
        cpf varchar(18) not null,
        email varchar(256) not null,
        telefone varchar(18),
        data_nascimento date not null,
        # Não permite a repetição do atributo escolhido que foi o id 
        unique index (id)
);
create table tbl_curso(
    id int UNSIGNED not null auto_increment primary key,
    nome varchar(80) not null,
    carga_horaria int,
    icone varchar(100) not null,
    sigla varchar(5) not null,
    unique index(id)
);
create table tbl_aluno_curso(
    id int unsigned not null auto_increment primary key,
    id_aluno int unsigned not null,
    id_curso int unsigned not null,
    matricula varchar(15) not null,
    status_aluno varchar(20) not null,
    # Programação para definir uma chave estrangeira
    foreign key(id_aluno) # Define qual atributo será uma FK, (NÃO TEM VÍRGULA)
    references tbl_aluno (id),
    # Define de onde virá a PK
    foreign key(id_curso) # Define qual atributo será uma FK
    references tbl_curso(id),
    # Define de onde virá a PK
    unique index(id)
);
# Permite visualizar todos os dados de todas as colunas de uma tabela
    select * from tbl_aluno;
#
    insert into tbl_aluno(nome,
        foto,
        sexo,
        rg,
        cpf,
        email,
        telefone,
        data_nascimento
) # Qualquer atributo que não seja int OBRIGATORIAMENTE as ''(aspas simples) terão que ser usadas
    values(
        'Gerson da Cruz',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjOGF1DgIUMojeaid_86IC9C9iNCGXxOdqp2Y2uI&s',
        'M',
        '12.345.666-7',
        '987.654.321.1',
        'gersinho.dacruz@gmail.com',
        '011 991899895',
        '1986-02-04'
    );
    insert into tbl_aluno(
        nome,
        foto,
        sexo,
        rg,
        cpf,
        email,
        telefone,
        data_nascimento
    )
    values(
        'LeozinhoExtreme',
        'https://www.shutterstock.com/pt/image-photo/funny-nerd-geek-have-idea-holds-492607711',
        'M',
        '87.709.123-69',
        '616.907.431.1',
        'leoextreme12345678910@gmail.com',
        '011 99633-6638',
        '2006-03-01'
    );
    insert into tbl_aluno(
        nome,
        foto,
        sexo,
        rg,
        cpf,
        email,
        telefone,
        data_nascimento
    )
    values(
        'Homem do Saco',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5-4EARY8qPTL9S0yR_3XdclEGnvkz74Z1Q&usqp=CAU',
        'M',
        '11.111.111-69',
        '111.111.111.1',
        'homemdosaco@gmail.com',
        '111 111111',
        '1111-11-11'
    );
# Permite alterar valor de um atributo da tabela
# obs: sempre devemos especificar qual será o registro que vai sofrer alteração
# geralmente sempre será a PK
    update tbl_aluno set rg = '35.567.23-4' where id = 2;
    update tbl_aluno set sexo = 'F' where id = 2;

# Permite apagar um registro de uma tabela do BD
# obs: sempre devemos especificar qual será o registro que vai ser deletado
    delete from tbl_aluno  where id = 1;

# Permite selecionar alguma tabela e mostrar seus atributos
select * from tbl_aluno;

# CRUD 
    # Sigla das 4 operações que os projetos futuros necessitam ter
        # Create(Insert)
        # Read (Select)
        # Update (Uptade)
        # Delete (Delete)