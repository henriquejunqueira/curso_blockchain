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
    return `Block -
            Timestamp : ${this.timestamp}
            lastHash : ${this.lastHash}
            hash      : ${this.hash}
            data      : ${this.data}`;
  }
}
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
