import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "instrutor")
public class Instrutor {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_instrutor")
    private int idInstrutor;
    
    @Column(name = "RG")
    private int rg;
    
    @Column(name = "nome")
    private String nome;
    
    @Column(name = "nascimento")
    private Date nascimento;
    
    @Column(name = "titulacao")
    private int titulacao;

    // Getters and setters
    
    public int getIdInstrutor() {
        return idInstrutor;
    }

    public void setIdInstrutor(int idInstrutor) {
        this.idInstrutor = idInstrutor;
    }

    public int getRg() {
        return rg;
    }

    public void setRg(int rg) {
        this.rg = rg;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getNascimento() {
        return nascimento;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public int getTitulacao() {
        return titulacao;
    }

    public void setTitulacao(int titulacao) {
        this.titulacao = titulacao;
    }
}

@Entity
@Table(name = "turma")
public class Turma {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_turma")
    private int idTurma;
    
    @Column(name = "horario")
    private Time horario;
    
    @Column(name = "duracao")
    private int duracao;
    
    @Column(name = "dataInicio")
    private Date dataInicio;
    
    @Column(name = "dataFim")
    private Date dataFim;

    @ManyToOne
    @JoinColumn(name = "id_instrutor")
    private Instrutor instrutor;

    // Getters and setters
    
    public int getIdTurma() {
        return idTurma;
    }

    public void setIdTurma(int idTurma) {
        this.idTurma = idTurma;
    }

    public Time getHorario() {
        return horario;
    }

    public void setHorario(Time horario) {
        this.horario = horario;
    }

    public int getDuracao() {
        return duracao;
    }

    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }

    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }

    public Instrutor getInstrutor() {
        return instrutor;
    }

    public void setInstrutor(Instrutor instrutor) {
        this.instrutor = instrutor;
    }
}