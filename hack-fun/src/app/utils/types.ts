export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      all_chatrooms: {
        Row: {
          brief_name: string | null
          chatroom_id: string
          chatroom_path: string | null
          created_at: string
          projectId: string | null
          teamId: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          brief_name?: string | null
          chatroom_id: string
          chatroom_path?: string | null
          created_at?: string
          projectId?: string | null
          teamId?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          brief_name?: string | null
          chatroom_id?: string
          chatroom_path?: string | null
          created_at?: string
          projectId?: string | null
          teamId?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "all_chatrooms_brief_name_fkey"
            columns: ["brief_name"]
            isOneToOne: true
            referencedRelation: "individual_team"
            referencedColumns: ["brief_name"]
          },
          {
            foreignKeyName: "all_chatrooms_chatroom_id_fkey"
            columns: ["chatroom_id"]
            isOneToOne: true
            referencedRelation: "individual_team"
            referencedColumns: ["chatroomId"]
          },
          {
            foreignKeyName: "all_chatrooms_chatroom_path_fkey"
            columns: ["chatroom_path"]
            isOneToOne: true
            referencedRelation: "individual_team"
            referencedColumns: ["chatroom_path"]
          },
          {
            foreignKeyName: "all_chatrooms_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "all_chatrooms_username_fkey"
            columns: ["username"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["username"]
          },
          {
            foreignKeyName: "allChatrooms_chatroomId_fkey"
            columns: ["chatroom_id"]
            isOneToOne: true
            referencedRelation: "individual_team"
            referencedColumns: ["chatroomId"]
          }
        ]
      }
      all_teams: {
        Row: {
          brief_name: string | null
          created_at: string
          project_id: string | null
          team_id: string
          team_members: string[] | null
          team_members_mentor: string | null
          team_members_rest: string | null
        }
        Insert: {
          brief_name?: string | null
          created_at?: string
          project_id?: string | null
          team_id?: string
          team_members?: string[] | null
          team_members_mentor?: string | null
          team_members_rest?: string | null
        }
        Update: {
          brief_name?: string | null
          created_at?: string
          project_id?: string | null
          team_id?: string
          team_members?: string[] | null
          team_members_mentor?: string | null
          team_members_rest?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "all_teams_brief_name_fkey"
            columns: ["brief_name"]
            isOneToOne: true
            referencedRelation: "hackathon_sign_up"
            referencedColumns: ["brief_name"]
          },
          {
            foreignKeyName: "all_teams_team_members_mentor_fkey"
            columns: ["team_members_mentor"]
            isOneToOne: true
            referencedRelation: "mentor_sorting"
            referencedColumns: ["role_description"]
          },
          {
            foreignKeyName: "all_teams_team_members_rest_fkey"
            columns: ["team_members_rest"]
            isOneToOne: true
            referencedRelation: "bootcamper_sorting"
            referencedColumns: ["role_description"]
          },
          {
            foreignKeyName: "allTeams_briefName_fkey"
            columns: ["brief_name"]
            isOneToOne: true
            referencedRelation: "hackathon_sign_up"
            referencedColumns: ["brief_name"]
          }
        ]
      }
      bootcamper_sorting: {
        Row: {
          created_at: string
          id: number
          role_description: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          role_description?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          role_description?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bootcamper_sorting_role_description_fkey"
            columns: ["role_description"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["role_description"]
          },
          {
            foreignKeyName: "bootcamper_sorting_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bootcamper_sorting_username_fkey"
            columns: ["username"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["username"]
          }
        ]
      }
      comments_db: {
        Row: {
          chat_message_id: string | null
          comment_content: string | null
          comment_id: string
          created_at: string
          user_id: string | null
        }
        Insert: {
          chat_message_id?: string | null
          comment_content?: string | null
          comment_id: string
          created_at?: string
          user_id?: string | null
        }
        Update: {
          chat_message_id?: string | null
          comment_content?: string | null
          comment_id?: string
          created_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_db_chat_message_id_fkey"
            columns: ["chat_message_id"]
            isOneToOne: true
            referencedRelation: "general_chat"
            referencedColumns: ["chat_message_id"]
          },
          {
            foreignKeyName: "comments_db_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: true
            referencedRelation: "project_feed"
            referencedColumns: ["comment_id"]
          },
          {
            foreignKeyName: "comments_db_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      general_chat: {
        Row: {
          chat_message_id: string
          created_at: string
          message_content: string | null
          user_id: string | null
        }
        Insert: {
          chat_message_id?: string
          created_at?: string
          message_content?: string | null
          user_id?: string | null
        }
        Update: {
          chat_message_id?: string
          created_at?: string
          message_content?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      hackathon_sign_up: {
        Row: {
          brief_name: string | null
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          brief_name?: string | null
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          brief_name?: string | null
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      individual_team: {
        Row: {
          brief_name: string | null
          chatroom_path: string | null
          chatroomId: string | null
          created_at: string
          project_id: string | null
          team_id: string
          user_id: string | null
        }
        Insert: {
          brief_name?: string | null
          chatroom_path?: string | null
          chatroomId?: string | null
          created_at?: string
          project_id?: string | null
          team_id?: string
          user_id?: string | null
        }
        Update: {
          brief_name?: string | null
          chatroom_path?: string | null
          chatroomId?: string | null
          created_at?: string
          project_id?: string | null
          team_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "individual_team_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "all_teams"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "individual_team_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "individualTeam_projectId_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "all_teams"
            referencedColumns: ["project_id"]
          }
        ]
      }
      mentor_sorting: {
        Row: {
          created_at: string
          id: string
          role_description: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role_description: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role_description?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mentor_sorting_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      project_feed: {
        Row: {
          brief_name: string | null
          comment_id: string | null
          created_at: string
          github_project_link: string | null
          presentation_link: string | null
          project_id: string
          project_posting_id: string | null
          user_id: string | null
        }
        Insert: {
          brief_name?: string | null
          comment_id?: string | null
          created_at?: string
          github_project_link?: string | null
          presentation_link?: string | null
          project_id: string
          project_posting_id?: string | null
          user_id?: string | null
        }
        Update: {
          brief_name?: string | null
          comment_id?: string | null
          created_at?: string
          github_project_link?: string | null
          presentation_link?: string | null
          project_id?: string
          project_posting_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_feed_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      soc_emails: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      team_chatroom: {
        Row: {
          chatroom_id: string
          created_at: string
          message_content: string | null
          message_id: string
          user_id: string | null
        }
        Insert: {
          chatroom_id: string
          created_at?: string
          message_content?: string | null
          message_id?: string
          user_id?: string | null
        }
        Update: {
          chatroom_id?: string
          created_at?: string
          message_content?: string | null
          message_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_chatroom_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      todos: {
        Row: {
          created_at: string
          id: number
          task: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          task?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          task?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          about_me: string | null
          avatar_image_url: string | null
          created_at: string | null
          email: string | null
          github_link: string | null
          hack_points: number | null
          id: string
          linkedin_link: string | null
          name: string | null
          role_description: string | null
          skills: string | null
          username: string | null
        }
        Insert: {
          about_me?: string | null
          avatar_image_url?: string | null
          created_at?: string | null
          email?: string | null
          github_link?: string | null
          hack_points?: number | null
          id: string
          linkedin_link?: string | null
          name?: string | null
          role_description?: string | null
          skills?: string | null
          username?: string | null
        }
        Update: {
          about_me?: string | null
          avatar_image_url?: string | null
          created_at?: string | null
          email?: string | null
          github_link?: string | null
          hack_points?: number | null
          id?: string
          linkedin_link?: string | null
          name?: string | null
          role_description?: string | null
          skills?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never