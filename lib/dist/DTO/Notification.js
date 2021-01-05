"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(payload) {
        this.payload = payload;
        this.identifier = this.payload.identifier;
    }
    get title() {
        return this.payload.title;
    }
    get body() {
        return this.payload.body;
    }
    get sound() {
        return this.payload.sound;
    }
    get badge() {
        return this.payload.badge;
    }
    get type() {
        return this.payload.type;
    }
    get thread() {
        return this.payload.thread;
    }
    // Android O and higher only below
    get importance() {
        return this.payload.importance;
    }
    get channelName() {
        return this.payload.channelName;
    }
    get channelId() {
        return this.payload.channelId;
    }
}
exports.Notification = Notification;
