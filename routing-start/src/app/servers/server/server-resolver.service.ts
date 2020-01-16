import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

export interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serversService: ServersService){

    }
    resolve(
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot
    ): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+activatedRouteSnapshot.params['id']);
    }
}