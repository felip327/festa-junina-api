const supabase = require('./supabase');

const database = {
    // --- PRODUTOS ---
    async buscarProdutos() {
        const { data, error } = await supabase
            .from('produtos1')
            // O join também precisa referenciar o nome exato da tabela estrangeira
            .select('*, categorias1(nome)'); 
        if (error) throw error;
        return data;
    },

    async buscarProdutoPorId(id) {
        const { data, error } = await supabase
            .from('produtos1')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    },

    // --- CATEGORIAS ---
    async buscarCategorias() {
        const { data, error } = await supabase
            .from('categorias1')
            .select('*');
        if (error) throw error;
        return data;
    },

    // --- PEDIDOS ---
    async criarPedido(dadosPedido) {
        const { data, error } = await supabase
            .from('pedidos1')
            .insert([dadosPedido])
            .select();
        if (error) throw error;
        return data[0];
    }
};

module.exports = database;