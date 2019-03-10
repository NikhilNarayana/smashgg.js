import * as Schema from './schema'
export const tournament = `query TournamentQuery($id:Int){
    tournament(id: $id){
        ${Schema.tournament}
    }
}`
export const tournamentBySlug = `query TournamentQuery($slug: String) {
    tournament(slug: $slug){
        ${Schema.tournament}
    }
}`

export const tournamentOrganizer = `query tournamentOrganizer($id: Int){
    tournament(id: $id){
        ${Schema.organizer}
    }   
}`

export const tournamentVenue = `query tournamentVenue($id: Int){
    tournament(id: $id){
		${Schema.venue}
	}	
}`

export const tournamentEntrants = `query TournamentEntrants($id: Int, $page: Int, $perPage: Int, $sortBy: String, $filter: EventEntrantPageQueryFilter){
    tournament(id: $id){
        events{
            entrants(query: {
                page: $page,
                perPage: $perPage,
                sortBy: $sortBy,
                filter: $filter
            }){
                {pageInfo}
                nodes{
                    ${Schema.entrant}
                }
            }
        }
    }
}`

export const tournamentAttendees = `query TournamentAttendees($id: Int, $page: Int, $perPage: Int, $sortBy: String, $filter: ParticipantPageFilter){
    tournament(id: $id){
        participants(query: {
            page: $page,
            perPage: $perPage,
            sortBy: $sortBy,
            filter: $filter
        },
        isAdmin: false){
            {pageInfo}
            nodes{
                ${Schema.attendee}
            }
        }
    }  
}`

export const tournamentEvents = `query TournamentEvents($id: Int){
    tournament(id: $id){
        events:{
            ${Schema.event}
        }
    }
}`

export const tournamentPhases = `query TournamentPhases($id: Int){
    tournament(id: $id){
        events{
            id
            phases{
                ${Schema.phase}
            }
        }
    }   
}`

export const tournamentPhaseGroups = `query TournamentPhaseGroups($id: Int){
    tournament(id: $id){
        events{
            phaseGroups{
                ${Schema.phaseGroup}
            }
        }
    }   
}`

/** WARNING THIS DOES NOT WORK CURRENTLY DUE TO RECURSIVE LIMITATIONS, Use tournamentPhaseGroupIds instead **/
export const tournamentSets = `query TournamentSets($id: Int){
    tournament(id: $id){
        events{
            phaseGroups{
                sets{
                    ${Schema.set}
                }
            }
        }
    }   
}`

export const tournamentPhaseGroupIds = `query PhaseGroupIdQuery($id: Int){
    tournament(id: $id){
        events{
            id
            phaseGroups{
                id
            }
        }
    }
}`