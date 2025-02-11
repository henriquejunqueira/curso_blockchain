# Repositório para os projetos do curso Blockchain com Node.js: Construa a sua Blockchain!

### Instalação de dependências e configurações

- Criando o package.json: `$ npm init -y`
- Instalado crypto-js: `$ npm i crypto-js`
- Instalado jest para testes: `$ npm i jest --save-dev`

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

---

### Bloco Genesis

- Adicionado no arquivo block.js:

```javascript
    static genesis() {
        return new this('Genesis time', '-----', 'f1r57-h45h', []);
    }
```

- Este código define um método estático chamado genesis na classe Block. Métodos estáticos são métodos que podem ser chamados diretamente na própria classe, em vez de em uma instância da classe.
- O método genesis cria uma nova instância da classe Block chamando o construtor Block com argumentos específicos: 'Genesis time', '-----', 'f1r57-h45h' e um array vazio.
  A sintaxe new this(...) é usada para chamar o construtor na classe atual, que é Block. A palavra-chave this se refere à própria classe e não a uma instância da classe.
- Este método é útil para criar um bloco especial "genesis" que pode ser usado como o primeiro bloco na cadeia. Este bloco geralmente tem características especiais e é usado para inicializar a cadeia.
- Para usar este método, você simplesmente o chama diretamente na classe, assim:

```javascript
const genesisBlock = Block.genesis();
```

- Isso criará uma nova instância da classe Block com as propriedades definidas com os valores passados no método genesis.
- Também é importante notar que o método genesis é um método estático, então ele não pode acessar as propriedades da instância da classe, o que significa que ele não pode usar this para acessá-las.

---

### MineBlock

- Adicionado no arquivo block.js:

```javascript
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';
        return new this(timestamp, lastHash, hash, data);
    }
```

- O código acima é uma função chamada "mineBlock" que é usada para criar novos blocos em uma blockchain. Ele tem dois parâmetros: "lastBlock" e "data".
- A primeira linha da função cria uma constante chamada "timestamp" e atribui a ela o valor retornado pela função "Date.now()". Isso fornece a data e hora atuais no formato de timestamp Unix.
- A segunda linha cria uma constante chamada "lastHash" e atribui a ela o valor do hash do último bloco na blockchain, que é passado como um parâmetro para a função.
- A terceira linha cria uma constante chamada "hash" e atribui a ela uma string "todo-hash", que é um placeholder para o hash real que seria calculado para o novo bloco. Esse cálculo é geralmente feito usando uma função de hash como o SHA-256.
- Na quarta linha, uma nova instância da classe à qual a função pertence é criada e retornada. Essa nova instância é inicializada com os valores "timestamp", "lastHash", "hash" e "data" passados para o construtor da classe.
- Em resumo, a função mineBlock() é usada para criar um novo bloco na blockchain, usando a data e hora atual, o hash do último bloco, um placeholder para o hash calculado e quaisquer dados adicionais passados para ela.

- Nessa parte do código colocada no teste.js:

```javascript
const primeiroBloco = Block.mineBlock(Block.genesis(), '$500');
console.log(primeiroBloco.toString());
```

- O código acima cria uma nova constante chamada "primeiroBloco" e atribui a ela o resultado da chamada da função "mineBlock" na classe "Block", passando dois argumentos: o bloco "genesis", que é o primeiro bloco na blockchain, e a string "$500" como os dados para o novo bloco.
- O bloco "genesis" é tipicamente codificado manualmente e é usado para inicializar a blockchain. Ele serve como ponto de partida para toda a cadeia e é frequentemente usado para armazenar informações importantes, como o estado inicial do sistema.
- Em seguida, ele chama a função "console.log", passando o resultado da chamada do método "toString" na variável "primeiroBloco ". O método "toString" é usado para exibir as propriedades do objeto em um formato legível pelo ser humano.
- Em resumo, esse código cria um novo bloco na blockchain, com "$500" como seus dados e exibe ele como uma string.

---

### Criando o Hash Através do SHA-256

```javascript
const SHA256 = require('crypto-js/sha256');
```

- A linha de código acima está importando o módulo SHA256 da biblioteca crypto-js.
- SHA-256 é uma função de hash criptográfica que recebe uma entrada (ou 'mensagem') e retorna uma string de tamanho fixo de caracteres, que é um 'hash'.
- É uma função de uma via, o que significa que é praticamente impossível recriar a entrada original a partir do hash.
- O módulo será usado para criar o hash dos dados do bloco, é uma forma de garantir a integridade dos dados armazenados no bloco.

```javascript
  static hash(timestamp, lastHash, data) {
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  }
```

- O código acima é um método estático chamado "hash" que faz parte da classe Block.
- Este método recebe três argumentos: timestamp, lastHash e data.
- Ele concatena esses valores usando literais de template ${timestamp}${lastHash}${data} e, em seguida, usa o módulo SHA256 importado para criar o hash da string concatenada.
- O método toString() é usado para converter o valor de hash resultante em uma string e retorná-lo.
- Este método é usado para garantir a integridade dos dados armazenados no bloco, gerando um hash único para cada bloco, que é baseado nos dados, timestamp e hash do último bloco.
- É uma forma de garantir que os dados no bloco não foram adulterados.

---

### Teste Classe Block

- Adicionado no arquivo block.test.js:

```javascript
const Block = require('./block');

describe('Block', () => {
  let data, lastBlock, block;
  beforeEach(() => {
    data = 'bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it('sets the `data` to match the input', () => {
    expect(block.data).toEqual(data);
  });

  it('sets the `lastHash` to match the hash of the last block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});
```

- O código acima está testando uma classe chamada "Block" usando o framework de teste Jest. Ele possui dois casos de teste:

1. O primeiro caso de teste está usando a função it para testar se a propriedade data do objeto block é igual ao valor de entrada data que foi passado para o método mineBlock. Ele está usando o matcher toEqual para verificar se a propriedade data do objeto block é igual ao valor de entrada data.
2. O segundo caso de teste também está usando a função it para testar se a propriedade lastHash do objeto block é igual à propriedade hash do objeto lastBlock. Ele está usando o matcher toEqual para verificar se a propriedade lastHash do objeto block é igual ao hash do objeto lastBlock.

- A função beforeEach é executada antes de cada caso de teste e cria as variáveis ​​data, lastBlock e block usadas nos casos de teste. Isso garante que cada caso de teste esteja usando um conjunto fresco de dados e objetos.
- A função describe é usada para agrupar casos de teste relacionados. Ele serve somente para fins de organização e não é necessário para que os casos de teste funcionem.
