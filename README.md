# Repositório para os projetos do curso Blockchain com Node.js: Construa a sua Blockchain!

### Classe Block

- A classe Block é uma parte fundamental em qualquer implementação de blockchain. Ela representa cada "bloco" na corrente de blocos, contendo as informações relevantes para aquele momento.

```javascript
class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  toString() {
    return `Block =
            Timestamp = ${this.timestamp}
            lastHash = ${this.lastHash}
            hash      = ${this.hash}
            data      = ${this.data}`;
  }
}

module.exports = Block;
```

- Neste exemplo, a classe Block tem quatro propriedades: timestamp, lastHash, hash e data. O construtor da classe aceita estes quatro argumentos e os atribui à instância da classe usando a palavra-chave "this":

  - timestamp: é a hora da criação do bloco

  - lastHash: é o hash do bloco anterior na cadeia

  - hash: é o hash desse bloco atual

  - data: é o dado ou informação que está sendo armazenado no bloco

- Além disso, a classe tem um método "toString()" que retorna uma representação de string formatada do objeto Block. Isso é útil para imprimir informações sobre o bloco quando necessário.

- Para criar uma nova instância da classe Block, você pode chamar o construtor da seguinte maneira:

```javascript
const novoBloco = new Block(Date.now(), 'hash anterior', 'hash atual', 'dados');
```

- É importante notar que, na construção de uma blockchain, a segurança é uma preocupação fundamental. Um dos principais problemas é a possibilidade de um indivíduo ou grupo mal intencionado alterar informações em um bloco já existente.
- Para evitar isso, é comum utilizar algoritmos de hash criptográfico para gerar o hash de cada bloco. Isso garante que, se alguém tentar alterar o conteúdo de um bloco, o hash desse bloco será diferente e a cadeia inteira será considerada inválida.
- Além disso, a classe Block geralmente é apenas uma parte de um sistema mais complexo de criação de blocos e validação de cadeias. Outras classes e algoritmos podem ser necessários para garantir a segurança e integridade da cadeia.
- Em resumo, a classe Block é uma parte fundamental de qualquer implementação de blockchain.
- A ultima linha permite exportar a classe Block, para que ela possa ser usada em outras partes do aplicativo.
- O module.exports é um objeto que representa o módulo atual e é usado para definir o que deve ser exportado quando o módulo é importado em outro arquivo. O = Block atribui a classe Block ao objeto module.exports, tornando-a disponível para outras partes do aplicativo importá-la e usá-la.
- Por exemplo, em outro arquivo, podemos importar a classe Block usando a função require():

```javascript
const Block = require('./block');
```

- Isso permite criar novas instâncias da classe Block e usar seus métodos em outras partes do aplicativo.
- É importante notar que, para que essa linha funcione corretamente, o arquivo que contém este código deve ser um arquivo de módulo Node.js válido, o que significa que ele deve ter a extensão .js e estar localizado em um diretório que esteja incluído no caminho de busca de módulos do Node.js.

---

### Primeiro Bloco

```javascript
const Block = require('./block');

const block = new Block('foo', 'bar', 'zoo', 'baz');
console.log(block.toString());
```

- Este código está importando a classe Block do arquivo ./block e, em seguida, criando uma nova instância da classe, chamada block.
- A nova instância é criada chamando o construtor Block e passando quatro strings como argumentos: 'foo', 'bar', 'zoo' e 'baz'. Esses argumentos são atribuídos às propriedades timestamp, lastHash, hash e data da instância block, respectivamente.
- Depois que a instância é criada, o código chama o método toString() na instância block e registra a string retornada na console. O método toString() é um método personalizado que é definido na classe Block, ele não recebe argumentos e retorna uma representação de string do objeto block com todos os valores das propriedades.
- A chamada `console.log(block.toString())` irá produzir a seguinte saída na console:

```css
    Block -
        Timestamp : foo
        lastHash : bar
        hash      : zoo
        data      : baz
```

- É importante notar que este código está usando a função `console.log()` para sair o resultado do método `toString()` para a console. Isso é útil para depuração e inspeção das propriedades do objeto block.
