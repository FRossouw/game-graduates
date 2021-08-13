import { environment } from "src/environments/environment";

export const DATABASE = {
    name: environment.database.name,
    collection: {
        test: environment.production
    }
}
