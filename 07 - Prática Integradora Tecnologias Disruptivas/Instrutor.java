@Entity
@Table(name = "instrutor")
public class Instrutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_instrutor")
    private Integer idInstrutor; 

    // Atributos
    @Column(name = "RG")
    private Integer rg;

    @Column(name = "nome")
    private String nome;

    @Column(name = "nascimento")
    private Date nascimento;

    @Column(name = "titulacao")
    private Integer titulacao;

    // Relacionamento 1 para 1
    @OneToOne(mappedBy = "instrutor")
    private Turma turma;
    
    // Getters and setters

}

@Entity
@Table(name = "turma")
public class Turma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(na)
}