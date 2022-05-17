package com.saber404.api.repository;

import com.saber404.api.entity.Battle;
import com.saber404.api.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BattleRepository extends JpaRepository<Battle, String> {

    @Query(value = "select count(*) from battle b where sender_id =:senderId and receiver_id = :receiverId and status = :status", nativeQuery = true )
    int checkOverlap(String senderId, String receiverId, String status);

    @Query(value = "select * from battle b where sender_id = :senderId and status = :status", nativeQuery = true )
    List<Battle> getSendList(String senderId, String status);

    @Query(value = "select * from battle b where receiver_id = :receiverId and status = :status", nativeQuery = true )
    List<Battle> getReceiveList(String receiverId, String status);

    @Modifying
    @Query(value = "update battle b set b.status = :status where id = :battleId", nativeQuery = true )
    void changeStatus(String battleId, String status);

    Optional<Battle> findById(String battleId);
    @Modifying
    @Query(value = "update battle b set b.winner = :winner where id = :battleId", nativeQuery = true )
    void changeWinner(String battleId, String winner);

    @Modifying
    @Query(value = "update battle b set b.start_time = :startTime where id = :battleId", nativeQuery = true )
    void setStartTime(String battleId, String startTime);
}
