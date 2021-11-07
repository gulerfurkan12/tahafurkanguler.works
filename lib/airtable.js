import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY}).base(
    process.env.AIRTABLE_API_ID
)


const minifiedRecords = (records) => {
    return records.map((record) => minifyRecord(record))
}

const minifyRecord = (record) => {
    return {
        id: record.id,
        ...record.fields
    }
}


async function getTable(table){
    const records = await base(table)
        .select({
            sort: [{ field:'Order', direction:'asc' }]
        })
        .all()
    const data = await minifiedRecords(records)
    return data
}

export {getTable}