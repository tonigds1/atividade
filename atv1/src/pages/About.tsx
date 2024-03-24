import foto from '../img/d0Yh33Of_400x400.jpg'

export const About = () => {
    return(
        <div>
            <h1>Sobre Mim</h1>
            <table>
                <tr>
                    <td>
                        <img src={foto}></img>
                    </td>
                    <td><p>Estudante de Ciência da Computação, e Sistemas para Internet, conheço tecnologias
de Front-End, Back-End. Atualmente presto residência estudantil pelo Porto Digital
com a empresa CESAR, agregando conhecimento prático e teórico sobre soluções de
problemas e ferramentas para o desenvolvimento de software.</p></td>
                </tr>
                <tr>
                    <td><h2>Instituíção</h2></td>
                    <td><h2>Formações</h2></td>
                </tr>
                <tr>
                    <td><h2>UFRPE</h2></td>
                    <td><p>Bacharel em Ciência da computação (cursando)</p></td>
                </tr>
                <tr>
                    <td>
                        <h2>UNICAP</h2>
                    </td>
                    <td>
                        <p>Sistêmas para Internet (cursando)</p>
                    </td>
                </tr>
            </table>
            <hr/>
            <h1>Habilidades Técnicas</h1>
            <ul>
                <li><p>Linguagem de Programação: Java, C, Python, JavaScript</p></li>
                <li><p>Desenvolvimento Front-End: HTML, CSS, JavaScript, BootStrap, React;
                </p></li>
                <li><p>Desenvolvimento Back-End: Java, Python, C, SQL;
                </p></li>
                <li><p>Versionamento de Código: Git, GitHub;
                </p></li>
            </ul>
            <hr/>
            <ul>
      <h2>Redes Sociais</h2>
      <li>
        <p><a href='https://github.com/tonigds1' target='_blank'> GitHub</a></p>
      </li>
      <li>
        <p><a href='https://www.linkedin.com/in/antônio-guedes-ab906a274/' target='_blank'>LinkedIn</a> </p>
      </li>
    </ul>
        </div>
    );
}