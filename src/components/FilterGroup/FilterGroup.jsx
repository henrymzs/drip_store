

const Marca = [
    {
        text: 'Adidas',
    },
    {
        text: 'Nike',
    },
    {
        text: 'Puma',
    },
    {
        text: 'Mormaii',
    },
    {
        text: 'Outros',
    }
]

const Categoria = [

    {
        text: "Esportes e Lazer",
    },

    {
        text: "Casual",
    },

    {
        text: "Utilitário",
    },

    {
        text: "Corrida",
    }

]

const Genero = [

    {
        text: "Masculino",
    },

    {
        text: "Feminino",
    },

    {
        text: "Unisex",
    },
]

const Estado = [

    {
        text: "Novo",
    },

    {
        text: "Usado",
    }
]

export default function FilterGroup() {

    return (
        <div className="filterGroup">
            <h1 className="filterTitle">Filtar Por</h1>
            <hr />

            <FilterComponent
                title='Marca'
                inputType='Checkbox'
                options={Marca}
            />
            <FilterComponent
                title='Categoria'
                inputType='Checkbox'
                options={Categoria}
            />
            <FilterComponent
                title='Gênero'
                inputType='Checkbox'
                options={Genero}
            />
            <FilterComponent
                title='Estado'
                inputType='radio'
                options={Estado}
            />

        </div>
    )
}