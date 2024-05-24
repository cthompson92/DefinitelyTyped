export = SQL;
declare function SQL(parts: TemplateStringsArray, ...values: any[]): SQL.Fragment;

declare namespace SQL {
    interface Fragment {
        raw: string;
        text: string;
        values?: any[] | undefined;
    }

    type ChainFn = (values: any[], part: string) => string;

    type Transformer = (values: any[], str: string, chain: ChainFn) => void;

    function insert(table: string, values: object): Fragment;
    function insert_bulk(table: string, keys: string[], values: any[][]): Fragment;
    function update(table: string, values: object, where?: any): Fragment;
    function select(table: string, where?: any, cols?: string, extra?: string): Fragment;
    function search_blob(search_field: string, qs: string, main_field?: string, LIKE?: string): Fragment | false;

    const transformers: { [key: string]: Transformer };
}
