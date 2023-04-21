export interface ChatterProps {
    chatter : string
}

export interface InitialState {
    conversations : conversation[],
}

export interface conversation {
    sender : string,
    message : string,
    sentTime : string
}

export interface state {
    blue : {chats : []},
    pink : {chats : []}
    conversations : object[]
  }

export interface Messages {
    sender : string,
    message : string,
    sentTime : string,
    chatter : string
}